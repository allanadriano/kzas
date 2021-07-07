<template>
  <div v-show="isVisible" class="alert alert--success">
    <span>
      Parabéns {{ user }}, agora você é um kzador ;) cheque seu email para os proximos passos!
    </span>
    <img @click="close()" src="../assets/img/close.svg" alt="Fechar alerta de sucesso">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: ['user', 'isVisible'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
})
</script>
