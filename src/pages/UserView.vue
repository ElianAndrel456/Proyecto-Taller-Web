<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import router from '@/router'
const userStore = useUserStore()

if (!userStore.user.auth) {
  router.push('/login')
}
</script>

<template>
  <main class="main">
    <h1>Hola,{{ userStore.user.name }}</h1>
    <p>Mis Pedidos</p>
    <button>Logout</button>
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
