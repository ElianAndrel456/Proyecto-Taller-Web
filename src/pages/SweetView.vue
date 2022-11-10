<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { ref, watchEffect } from 'vue'
import Loader from '@/components/Loader.vue'
import router from '@/router'
import type { Product } from '@/types/ProductsType'
const useProducts = useProductsStore()

const sweet = ref<Product[]>(useProducts.getSweets)
const loading = ref(true)

watchEffect(() => {
  sweet.value = useProducts.getSweets
  if (sweet.value.length > 0) {
    loading.value = false
    console.log(sweet.value.filter((drink) => drink.type === 'frozen'))
  }
})
const redirect = (id: string) => {
  router.push(`/sweet/${id}`)
}
</script>

<template>
  <main class="main">
    <h1>Dulces y Salados</h1>
    <!-- Section Juices -->
    <div class="section">
      <h2 class="title_text">Yoguis</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="yogui in sweet"
          :key="yogui.id"
        >
          <div
            @click="redirect(yogui.id)"
            v-show="yogui.type === 'yogui'"
            class="card"
          >
            <div class="card_img">
              <img
                :src="yogui.imgs[0]"
                alt=""
              />
              <img
                :src="yogui.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ yogui.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Creepes</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="creepe in sweet"
          :key="creepe.id"
        >
          <div
            @click="redirect(creepe.id)"
            v-show="creepe.type === 'creepe'"
            class="card"
          >
            <div class="card_img">
              <img
                :src="creepe.imgs[0]"
                alt=""
              />
              <img
                :src="creepe.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ creepe.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Waffles</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="waffle in sweet"
          :key="waffle.id"
        >
          <div
            @click="redirect(waffle.id)"
            v-show="waffle.type === 'waffles'"
            class="card"
          >
            <div class="card_img">
              <img
                :src="waffle.imgs[0]"
                alt=""
              />
              <img
                :src="waffle.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ waffle.name }}</span>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.section {
  width: 100%;
  position: relative;
  text-align: center;
  margin: 20px 0;
  padding: 1rem 2.5rem;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  place-items: center;
}
.card {
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card img {
  object-fit: cover;
  object-position: center;
  width: 300px;
  height: 400px;
}
.card_img {
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
}
.card_img img {
  background-color: var(--color-background);
  position: absolute;
  top: 0;
  left: 0;
}
.card:hover .card_img img:nth-child(2) {
  display: none;
  transition: all 0.4s ease;
}
</style>
