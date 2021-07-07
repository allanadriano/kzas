<template>
  <section class="users">

    <KNavbar />

    <div class="content">
      <div class="container">
        <h1 class="title text--uppercase">Confira o ranking dos melhores <span>Kzadores</span></h1>
      </div>
      <div class="container">
        <ul class="kzadors">
          <KUser 
            v-for="(user, index) in users"
            :user="user"
            :randomNumber="index"
            @delete-user="deleteUser(index)"
            :key="index"
          />
        </ul>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from '@/types/User'
import KUser from '@/components/User.vue'
import KNavbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'Users',
  components: { KNavbar, KUser },
  data: () => ({
    users: [] as User[]
  }),
  mounted() {
    const usersLocal = localStorage.getItem('users')

    if(usersLocal) {
      this.users = JSON.parse(usersLocal)
    }
  },
  methods: {
    deleteUser(x: number) {
      this.users.splice(x, 1)
      this.saveUsers()
    },
    saveUsers() {
      const parsed = JSON.stringify(this.users)
      localStorage.setItem('users', parsed)
    }
  }
});
</script>