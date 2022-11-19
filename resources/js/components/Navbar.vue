<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { RouterLink } from 'vue-router'
import { useUIStore } from '../stores/ui'
const uiStore = useUIStore()
const userStore = useUserStore()

const toggleMenu = () => {
  uiStore.toggleMenu()
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="container_1">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="icon"
          @click="toggleMenu"
          v-if="!uiStore.isSidebarOpen"
        />
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="icon"
          style="font-size: 1.5rem"
          @click="toggleMenu"
          v-else
        />
        <RouterLink
          to="/"
          class="router"
        >
          <div class="logo">
            <img
              src="../assets/logo.png"
              alt=""
            />
          </div>
        </RouterLink>
      </div>
      <div class="container_2">
        <RouterLink
          :to="userStore.user.auth ? '/user' : '/login'"
          class="item router"
        >
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="icon"
          />
          <span>{{
            userStore.user.auth ? userStore.user.name : 'Cuenta'
          }}</span>
        </RouterLink>
        <RouterLink
          to="/cart"
          class="item router"
        >
          <font-awesome-icon
            icon="fa-solid fa-bag-shopping"
            class="icon"
          />
          <span>Carrito</span>
        </RouterLink>
      </div>
    </div>
  </header>
  <div class="bar"></div>
</template>

<style scoped>
.bar {
  height: 80px;
}
.header {
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 5%;
  position: fixed;
  z-index: 100;
  background-color: var(--color-background);
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.container_1 {
  display: flex;
  align-items: center;
}
.logo {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0.5rem;
}

.container_2 {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 1.1rem;
  margin: 0 0.7rem;
  cursor: pointer;
}

.item {
  display: flex;
  align-items: center;
  min-width: 6rem;
  height: 2rem;
  cursor: pointer;
}
.router {
  color: var(--color-text);
  text-decoration: none;
}
.logo img {
  width: 60px;
  filter: drop-shadow(0 0 0.75rem var(--color-text));
}
</style>
