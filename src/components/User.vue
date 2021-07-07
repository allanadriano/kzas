<template>
  <li class="card">
    <img class="img-kzador" :src="`https://via.placeholder.com/150&text= Kzador nº ${randomNumber}`" :alt="user.name">
    <div class="card-body">
      <h3 class="text--uppercase">{{ user.name }}</h3>
      <p>
        <img src="../assets/img/phone.svg" alt="Telefone do usuário" />
        {{ maskPhone(user.phone) }}
      </p>
      <p>
        <img src="../assets/img/mail.svg" alt="Email do usuário">
        {{ user.email }}
      </p>
    </div>
    <span class="btn btn--icon" @click="deleteUser()">
      <img src="../assets/img/delete-white.svg" alt="Deletar usuário" />
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { maskPhone } from '@/utils/mask'

export default defineComponent({
  name: 'Alert',
  props: ['user', 'randomNumber'],
  methods: {
    maskPhone,
    deleteUser(x: number) {
      this.$emit('deleteUser', x)
    }
  }
})
</script>
