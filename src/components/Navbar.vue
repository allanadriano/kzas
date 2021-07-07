<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="brand" to="/">
        <img src="../assets/img/logo-color.svg" alt="Logo do site">
      </router-link>

      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Registre-se</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>
