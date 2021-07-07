<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserDataService from '@/services/UserDataService'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
  name: 'App',
  data: () => ({
    user: {},
  }),
  methods: {
    retrieveUsers() {
      UserDataService.getAllUsersApi()
        .then((response: ResponseData) => {
          let userLocal = localStorage.getItem('users')

          if(!userLocal) {
            const parsed = JSON.stringify(response.data)
            localStorage.setItem('users', parsed)
          }
        })
        .catch((e: Error) => {
          console.log(e)
        })
    }
  },
  mounted() {
    this.retrieveUsers()
  }
})
</script>
