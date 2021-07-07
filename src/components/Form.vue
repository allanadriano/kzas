<template>
  <KForm v-slot="{ errors }" @submit="addUser()">

    <KAlert :user="newUser" :isVisible="submited" @close="closeAlert" />

    <div class="group">
      <div class="row">
        <label for="">Primeiro nome</label>
        <Field
          :rules="validateFieldEmpty"
          name="first_name"
          v-model="user.first_name"
          :class="['input', { 'input--error' : errors.first_name, 'input--success' : user.first_name && !errors.first_name }]"
          type="text"
          placeholder="Primeiro Nome"
          required
        />
      </div>

      <div class="row">
        <label for="">Sobrenome</label>
        <Field
          :rules="validateFieldEmpty"
          name="last_name"
          v-model="user.last_name"
          :class="['input', { 'input--error' : errors.last_name, 'input--success' : user.last_name && !errors.last_name }]"
          type="text"
          placeholder="Sobrenome"
          required
        />
      </div>
    </div>

    <div class="group">
      <div class="row">
        <ErrorMessage  class="msg msg--error" name="first_name"/>
      </div>
      <div class="row">
        <ErrorMessage class="msg msg--error" name="last_name"/>
      </div>
    </div>

    <div class="row">
      <label for="">CPF</label>
      <Field
        :rules="validateFieldEmpty"
        name="cpf"
        v-model="user.cpf"
        :class="['input', { 'input--error' : errors.cpf, 'input--success' : user.cpf && !errors.cpf }]"
        type="text"
        placeholder="CPF"
        required
        @input="maskCPF"
        maxlength="14"
      />
      <ErrorMessage class="msg msg--error" name="cpf"/>
    </div>

    <div class="row">
      <label for="">Telefone</label>
      <Field
        :rules="validateFieldEmpty"
        name="phone"
        v-model="user.phone"
        :class="['input', { 'input--error' : errors.phone, 'input--success' : user.phone && !errors.phone }]"
        type="text"
        placeholder="Telefone"
        required
        @input="maskPhone"
        maxlength="16"
      />
      <ErrorMessage class="msg msg--error" name="phone"/>
    </div>

    <div class="row">
      <label for="">Email</label>
      <Field
        :class="['input', { 'input--error' : errors.email, 'input--success' : user.email && !errors.email }]"
        :rules="validateEmail"
        name="email"
        v-model="user.email"
        type="email"
        placeholder="Email"
        required
      />
      <ErrorMessage class="msg msg--error" name="email"/>
    </div>

    <div class="row">
      <span class="text--terms">Em caso de duvidas, consulte nossos <a href="">termos de uso</a> e <a href="">politica de privacidade</a>. </span>
    </div>

    <div class="row">
      <button type="reset" @reset-form="resetUserForm()" class="btn btn--secondary btn--icon">
        <img src="../assets/img/delete.svg" alt="Reset formulário">
      </button>
      <button :disabled="!isValid" type="submit" :class="['btn btn--primary', { 'btn--disabled': !isValid }]">Registrar-se</button>
    </div>

  </KForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useForm, Form as KForm, Field, ErrorMessage } from 'vee-validate';
import User from '@/types/User'
import KAlert from '@/components/Alert.vue'

export default defineComponent({
  name: 'Form',
  setup() {
    const { resetForm } = useForm();

    return { resetForm }
  },
  data: () => ({
    user: {} as Partial<User>,
    submited: false,
    users: [] as Partial<User>[],
    newUser: '' as string | undefined
  }),
  components: { KAlert, KForm, Field, ErrorMessage },
  computed: {
    isValid() : any {
      return this.user.first_name && this.user.last_name && this.user.cpf && this.user.phone && this.user.email
    }
  },
  methods: {
    maskCPF(e: any) {
      const value = e.target.value
      const masked = value
        .toString()
        .replace(/[\D]/g, '')
        .replace(/([\d]{0,3})([\d]{0,3})([\d]{0,3})([\d]{0,2})/g, '$1.$2.$3-$4')
        .replace(/[\D]{1,}$/g, '')
        .slice(0, 14)

      this.user.cpf = masked
    },
    maskPhone(e: any) {
      const value = e.target.value
      const masked = value
        .toString()
        .replace(/[\D]/g, '')
        .replace(/([\d]{0,2})([\d]{0,1})([\d]{0,4})([\d]{0,4})/g, '($1) $2 $3-$4')
        .replace(/[\D]{1,}$/g, '')
        .slice(0, 16)

      this.user.phone = masked
    },
    validateFieldEmpty(value: string) {
      if (!value) {
        return 'Este campo é obrigatório!';
      }

      return true
    },
    validateEmail(value: string) {
      if (!value) {
        return 'Este campo é obrigatório';
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Por favor, digite um email válido!';
      }

      return true;
    },
    addUser() {
      if(!this.user) {
        return
      }

      this.newUser = this.user.first_name

      const data = {
        name: this.user.first_name + ' ' + this.user.last_name,
        cpf: this.user.cpf,
        phone: this.user.phone,
        email: this.user.email
      }

      this.user = data
      this.saveUsers()

    },
    saveUsers() {
      const usersLocal = localStorage.getItem('users')

      if(usersLocal) {
        this.users = JSON.parse(usersLocal)
      }

      this.users.push(this.user)
      localStorage.setItem('users', JSON.stringify(this.users))
      this.submited = true
      this.user.first_name = ''
      this.user.last_name = ''
      this.user.phone = '' as any
      this.user.cpf = '' as any
      this.user.email = ''

    },
    closeAlert() {
      this.submited = false
    },
    resetUserForm() {
      this.user = {}
    }
  }
})

</script>
