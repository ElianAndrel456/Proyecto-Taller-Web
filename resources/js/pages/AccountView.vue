<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
	<div class="container">
		<h1>Hola, {{ userStore.user.name }}</h1>
    
  </div>
</template>
