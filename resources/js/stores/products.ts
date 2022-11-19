import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types/ProductsType'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  const setProducts = (data: Product[]) => {
    products.value = data
  }

  const getProductById = (id: string) => {
    return products.value.find((product) => product.id === id)
  }

  const getDrinks = computed(() => {
    return products.value.filter((product) => product.category === 'drinks')
  })
  const getSweets = computed(() => {
    return products.value.filter((product) => product.category === 'sweets')
  })
  const getFastFoods = computed(() => {
    return products.value.filter((product) => product.category === 'fastfood')
  })

  return {
    products,
    setProducts,
    getDrinks,
    getSweets,
    getFastFoods,
		getProductById,
  }
})
