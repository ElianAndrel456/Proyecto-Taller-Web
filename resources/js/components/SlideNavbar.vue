<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useUIStore } from '@/stores/ui'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const userStore = useUserStore()

const sidebarClass = computed(() => {
  return useUIStore().isSidebarOpen ? 'slide active' : 'slide'
})
const backSidebarClass = computed(() => {
  return useUIStore().isSidebarOpen ? 'backSider active' : 'backSider'
})

const toggleMenu = () => {
  useUIStore().toggleMenu()
}
</script>

<template>
  <div
    :class="backSidebarClass"
    @click="toggleMenu"
  ></div>
  <div :class="sidebarClass">
    <nav class="nav">
      <div class="nav_container">
        <RouterLink
          to="/"
          @click="toggleMenu"
          class="router"
        >
          <h4 class="home">Home</h4>
        </RouterLink>
        <ul>
          <li>
            <router-link
              to="/drinks"
              @click="toggleMenu"
              class="router"
              >Drinks</router-link
            >
          </li>
          <li>
            <router-link
              to="/sweet"
              class="router"
              >Sweets and Salads</router-link
            >
          </li>
          <li>
            <router-link
              to="/fastfood"
              class="router"
              >Fast Food</router-link
            >
          </li>
        </ul>
        <RouterLink
          class="router step second"
          to="/cart"
          @click="toggleMenu"
        >
          <h4 class="link">Carrito</h4>
        </RouterLink>
        <RouterLink
          v-if="userStore.user.auth"
          class="router second"
          to="/login"
          @click="toggleMenu"
        >
          <h4 class="link">Cuenta</h4>
        </RouterLink>
        <RouterLink
          v-if="!userStore.user.auth"
          class="router second"
          to="/login"
          @click="toggleMenu"
        >
          <h4 class="link">Login</h4>
        </RouterLink>
        <RouterLink
          v-if="!userStore.user.auth"
          class="router second"
          to="/register"
          @click="toggleMenu"
        >
          <h4 class="link">Register</h4>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.backSider {
  width: 100%;
  height: calc(100vh - 80px);
  position: fixed;
  z-index: -1;
  transition: background-color 0.5s ease;
}
.backSider.active {
  background-color: var(--bg-transparent);
  z-index: 10;
}
.slide {
  width: 20%;
  min-width: 300px;
  height: calc(100vh - 80px);
  background-color: var(--color-background);
  transform: translateX(-100%);
  transition: transform 0.5s ease-out;
  position: fixed;
  z-index: 11;
}
.slide.active {
  transform: translateX(0);
}

.router {
  color: var(--color-text);
  letter-spacing: 1px;
  text-decoration: none;
}

.router.router-link-exact-active {
  border-bottom: 4px solid var(--color-text);
}
.router:hover {
  color: var(--text-hover);
}

.nav_container {
  display: inline-flex;
  flex-direction: column;
  height: 100%;
}
.nav_container .router:first-child {
  margin-bottom: 2rem;
  display: inline;
}
.home {
  font-size: var(--size-navbar-height);
}
.link {
  font-size: var(--size-navbar-height);
}

.nav {
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 2rem 5rem;
}
.nav ul {
  padding: 0;
}
.nav ul li {
  list-style: none;
}

.second {
  margin: 0.7rem 0;
}

.step {
  margin-top: 4rem;
}
</style>
