<script setup lang="ts">
import { priceModify } from '@/helper/priceModify'
import { useCartStore } from '@/stores/cart'
const useCart = useCartStore()
</script>
<template>
  <div class="price_container">
    <div>
      <span>Subtotal</span>
      <span>{{ priceModify(String(useCart.cart.subtotal)) }}</span>
    </div>
    <div>
      <span>Impuestos (18%)</span>
      <span>{{ priceModify(String(useCart.cart.tax)) }}</span>
    </div>
    <div>
      <span>Total</span>
      <span>{{ priceModify(String(useCart.cart.total)) }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<style scoped>
.price_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 1rem 0;
}
.price_container div {
  display: flex;
  justify-content: space-between;
}
.price_container div:nth-child(2) {
  color: gainsboro;
}
</style>
