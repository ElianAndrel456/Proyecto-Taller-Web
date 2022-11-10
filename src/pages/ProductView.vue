<script setup lang="ts">
import router from '../router'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { ref, watchEffect } from 'vue'
import { priceModify } from '@/helper/priceModify'
import izitoast from 'izitoast'

const product = ref(
  useProductsStore().getProductById(useRoute().params.id as string)
)
const addCart = () => {
  if (product.value) {
    useCartStore().setCart({ ...product.value, quantity: 1 })
    izitoast.success({
      title: 'Se agregó al carrito',
      message: 'El producto se agregó al carrito',
      position: 'topLeft',
    })
  }
}

watchEffect(() => {
  if (!product.value) {
    router.push('/')
  }
})
</script>
<template>
  <div v-if="!product">Error al cargar</div>
  <div
    v-else
    class="container"
  >
    <img
      :src="product.imgs[0]"
      alt=""
    />
    <div class="info">
      <h2>{{ product.name }}</h2>
      <p>{{ priceModify(product.price) }}</p>

      <button @click="addCart">Añadir al carrito</button>
      <div class="separator"></div>
      <div class="description_container">
        <p class="description_title">Descripcion del producto</p>
        <p class="description_paragraph">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 4rem;
  gap: 2rem;
  justify-content: center;
  justify-items: center;
}
.container img {
  width: 800px;
  height: 900px;
  object-fit: cover;
  border-radius: 5px;
}
.container .info {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 3rem;
}
.container .info h2 {
  font-size: 2rem;
  font-weight: 700;
}
.container .info h2 + p {
  color: #f2a365;
}

.container .info button {
  margin-top: 2rem;
  padding: 1rem;
  border: none;
  border: 1px solid var(--color-text);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s ease;
}
.container .info button:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}
.separator {
  margin: 2rem 0;
  border: 1px solid var(--color-text);
}

.description_title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.description_paragraph {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
