<script setup lang="ts">
import PriceComponent from "@/components/PriceComponent.vue";
import { priceModify } from "@/helper/priceModify";
import { useCartStore } from "@/stores/cart";
import router from "@/router";
const useCart = useCartStore();

const delete_product = (id: string) => {
    useCart.deleteProduct(id);
};
const redirect = (id: string) => {
    const findCategory = useCart.cart.products.find(
        (product) => product.id === id
    );
    if (findCategory?.category === "drinks") {
        router.push(`/drinks/${id}`);
    } else if (findCategory?.category === "fastfood") {
        router.push(`/fastfood/${id}`);
    } else if (findCategory?.category === "sweets") {
        router.push(`/sweet/${id}`);
    }
};
</script>
<template>
    <div class="container" v-if="useCart.cart.products.length === 0">
        <div class="modal">
            <img src="../assets/bagshop.svg" alt="" class="bagshop" />
            <h1>Tu carrito parece vacío</h1>
            <p>Agregue articulos a su carrito</p>
            <RouterLink class="btn" to="/">Seguir comprando</RouterLink>
        </div>
    </div>
    <div v-else>
        <div class="cart_container">
            <h2 class="title">Su carrito</h2>
            <div class="grid2">
                <div class="card_flex">
                    <div
                        v-for="product in useCart.cart.products"
                        class="card"
                        :key="product.id"
                        @click="redirect(product.id)"
                    >
                        <div class="card_product">
                            <img :src="product.imgs[0]" alt="" />
                            <div class="">
                                <span>{{ product.name }}</span>
                                <span>cantidad: {{ product.quantity }}</span>
                            </div>
                        </div>

                        <div class="card_amount">
                            <span @click="delete_product(product.id)">X</span>
                            <span>{{
                                priceModify(
                                    String(
                                        Number(product.price) * product.quantity
                                    )
                                )
                            }}</span>
                        </div>
                    </div>
                </div>
                <PriceComponent>
                    <RouterLink to="/pay" class="btn"
                        >Finalizar Pedido</RouterLink
                    >
                </PriceComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    min-height: 100vh;
}

.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    text-align: center;
}
.modal h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}
.btn {
    width: 100%;
    background: var(--color-background);
    color: var(--color-text);
    padding: 1rem;
    margin-top: 3rem;
    text-decoration: none;
    border: 1px solid var(--color-text);
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    transition: all 0.3s ease;
}
.btn:hover {
    background: var(--color-text);
    color: var(--color-background);
    text-decoration: none;
}
.bagshop {
    width: 300px;
}
.cart_container {
    min-height: 100vh;
}
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    min-width: 600px;
    height: 140px;
    cursor: pointer;
}
.card .card_product {
    display: flex;
}
.card .card_product img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 1rem;
}
.card .card_product div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
}
.card .card_product div span:nth-child(1) {
    font-size: 1.2rem;
}
.card span {
    font-size: 1rem;
}
.card_amount {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
}
.card_amount span:nth-child(1) {
    font-size: 1.5rem;
    cursor: pointer;
}
.grid2 {
    display: flex;
    max-width: 1000px;
    gap: 5rem;
    margin: 0 auto;
}
.title {
    text-align: center;
    margin: 4rem;
    font-size: 3rem;
}
</style>
