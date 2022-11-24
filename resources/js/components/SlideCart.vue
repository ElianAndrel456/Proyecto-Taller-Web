<script setup lang="ts">
import { useCartStore } from "../stores/cart";
import { useUIStore } from "../stores/ui";
import { priceModify } from "../helper/priceModify";
const cartStore = useCartStore();
const uiStore = useUIStore();
const closeCart = () => {
    uiStore.toggleCart();
};
</script>

<template>
    <div
        :class="uiStore.isSideCartOpen ? 'backSider active' : 'backSider'"
        @click="closeCart"
    ></div>
    <div
        :class="
            uiStore.isSideCartOpen ? 'container_cart active' : 'container_cart'
        "
    >
        <div class="text" v-if="cartStore.cart.products.length === 0">
            No hay ningun producto en el carrito
        </div>
        <div class="text" v-else>
            <h3>Tu Carrito</h3>
            <div class="card_cart" v-for="product in cartStore.cart.products">
                <div class="product">
                    <img :src="product.imgs[0]" alt="" />
                    <div class="info">
                        <span>{{ product.name }}</span>
                        <span
                            >Precio:
                            {{
                                priceModify(
                                    String(
                                        Number(product.price) *
                                            Number(product.quantity)
                                    )
                                )
                            }}</span
                        >
                        <span>Cantidad: {{ product.quantity }}</span>
                    </div>
                </div>
            </div>
            <div class="prices_cart">
                <div>Impuesto: {{ priceModify(cartStore.cart.tax) }}</div>
                <div>Total: {{ priceModify(cartStore.cart.total) }}</div>
                <RouterLink to="/cart" class="router">
                    <button @click="closeCart">Ir al pagar</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.backSider {
    width: 100%;
    height: calc(100vh - 80px);
    position: fixed;
    bottom: 0;
    z-index: -1;
    transition: background-color 0.5s ease;
}
.backSider.active {
    background-color: var(--bg-transparent);
    z-index: 10;
}
.container_cart {
    display: flex;
    position: fixed;
    width: 300px;
    height: calc(100vh - 80px);
    z-index: 100;
    bottom: 0;
    right: 0;
    background-color: var(--color-background);
    transform: translateX(100%);
    transition: transform 0.5s ease;
}
.container_cart.active {
    transform: translateX(0);
}
.card_cart {
    width: 100%;
    height: 100px;
    overflow: hidden;
    padding: 1rem;
}
.product {
    width: 100%;
    display: flex;
}
.product div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    align-items: flex-end;
}
.product img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.prices_cart {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
    font-weight: bolder;
}
.prices_cart button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-text);
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    border: 1px solid var(--color-text);
    transition: all 0.5s ease;
}
.prices_cart button:hover {
    background-color: var(--color-text);
    color: var(--color-background);
}
.router {
    width: 100%;
}
</style>
