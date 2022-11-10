<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { ref, watchEffect } from 'vue'
import Loader from '@/components/Loader.vue'
import router from '@/router'
import type { Product } from '@/types/ProductsType'
const useProducts = useProductsStore()

const drinks = ref<Product[]>(useProducts.getDrinks)
const loading = ref(true)

watchEffect(() => {
  drinks.value = useProducts.getDrinks
  if (drinks.value.length > 0) {
    loading.value = false
    console.log(drinks.value.filter((drink) => drink.type === 'frozen'))
  }
})
const redirect = (id: string) => {
  router.push(`/drinks/${id}`)
}
</script>

<template>
  <main class="main">
    <h1>Bebidas</h1>
    <!-- Section Juices -->
    <div class="section">
      <h2 class="title_text">Jugos</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="juice in drinks"
          :key="juice.id"
        >
          <div
            @click="redirect(juice.id)"
            v-show="juice.type === 'juice'"
            class="card"
          >
            <div class="card_img">
              <img
                :src="juice.imgs[0]"
                alt=""
              />
              <img
                :src="juice.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ juice.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- Section  -->
    <div class="section">
      <h2 class="title_text">Bebidas Calientes</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="hot_drink in drinks"
          :key="hot_drink.id"
        >
          <div
            v-show="hot_drink.type === 'hot drinks'"
            class="card"
            @click="redirect(hot_drink.id)"
          >
            <div class="card_img">
              <img
                :src="hot_drink.imgs[0]"
                alt=""
              />
              <img
                :src="hot_drink.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ hot_drink.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Bebidas Frias</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="cold_drinks in drinks"
          :key="cold_drinks.id"
        >
          <div
            v-show="cold_drinks.type === 'cold drinks'"
            class="card"
            @click="redirect(cold_drinks.id)"
          >
            <img
              :src="cold_drinks.imgs[0]"
              alt=""
            />
            <span>{{ cold_drinks.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Frozen</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="frozen in drinks"
          :key="frozen.id"
        >
          <div
            v-show="frozen.type === 'frozen'"
            class="card"
            @click="redirect(frozen.id)"
          >
            <div class="card_img">
              <img
                :src="frozen.imgs[0]"
                alt=""
              />
              <img
                :src="frozen.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ frozen.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Frappes</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="frappe in drinks"
          :key="frappe.id"
        >
          <div
            v-show="frappe.type === 'frappe'"
            class="card"
            @click="redirect(frappe.id)"
          >
            <div class="card_img">
              <img
                :src="frappe.imgs[0]"
                alt=""
              />
              <img
                :src="frappe.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ frappe.name }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="section">
      <h2 class="title_text">Milkshakes</h2>
      <Loader v-if="loading" />
      <div
        v-else
        class="container"
      >
        <template
          v-for="milkshake in drinks"
          :key="milkshake.id"
        >
          <div
            v-show="milkshake.type === 'milkshake'"
            class="card"
            @click="redirect(milkshake.id)"
          >
            <div class="card_img">
              <img
                :src="milkshake.imgs[0]"
                alt=""
              />
              <img
                :src="milkshake.imgs[1]"
                alt=""
              />
            </div>
            <span>{{ milkshake.name }}</span>
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
