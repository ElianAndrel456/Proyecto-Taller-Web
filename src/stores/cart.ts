import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Cart, ProductCart } from '@/types/CartType'



export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({
    products: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  })
  const calculatePrices = () => {
    cart.value.subtotal = cart.value.products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity
    }, 0)
    cart.value.tax = cart.value.subtotal * 0.18
    cart.value.total = cart.value.subtotal + cart.value.tax
  }

  const setCart = (data: ProductCart) => {
    const findProduct = cart.value.products.find(
      (product) => product.id === data.id
    )
    if (findProduct) {
      findProduct.quantity += data.quantity
      calculatePrices()
    } else {
      cart.value.products.push(data)
      calculatePrices()
    }
  }
  const deleteProduct = (id: string) => {
    const product = cart.value.products.find((product) => product.id === id)
    if (product) {
      cart.value.products = cart.value.products.filter(
        (product) => product.id !== id
      )
      calculatePrices()
    }
  }

  return { cart, setCart, deleteProduct }
})
