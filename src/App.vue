<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SlideNavbar from './components/SlideNavbar.vue'
import Footer from './components/Footer.vue'
import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useProductsStore } from '@/stores/products'
const useProducts = useProductsStore()

async function getData() {
  const data: any[] = []
  try {
    const querySnapshot = await getDocs(collection(db, 'Productos'))
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    })
  } catch (error) {
    console.log(error)
  }
  useProducts.setProducts(data)
  console.log('se ejecuto')
}
getData()
</script>

<template>
  <Navbar />
  <SlideNavbar />
  <RouterView />
  <!-- 
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>
	<RouterView />
 -->
  <Footer />
</template>

<style scoped>
/* nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
} */
</style>
