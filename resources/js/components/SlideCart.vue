<script setup lang="ts">
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();

console.log(cartStore.cart.products.length);
</script>

<template>
    <div class="container_cart">
        <div class="text" v-if="cartStore.cart.products.length === 0">
            No hay ningun producto en el carrito
        </div>
        <div class="text" v-else>
            {{ cartStore.cart.length }} productos en el carrito
        </div>
    </div>
</template>

<style scoped>
.container_cart {
    display: flex;
    position: fixed;
    width: 300px;
    height: calc(100vh - 80px);
    z-index: 100;
    bottom: 0;
    right: 0;
    background-color: white;
}
.text {
    color: blue;
}
</style>
