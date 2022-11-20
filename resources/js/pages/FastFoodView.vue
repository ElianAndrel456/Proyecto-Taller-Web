<script setup lang="ts">
import { useProductsStore } from "../stores/products";
import { ref, watchEffect } from "vue";
import Loader from "../components/Loader.vue";
import router from "../router";
import type { Product } from "../types/ProductsType";
const useProducts = useProductsStore();

const fastfood = ref<Product[]>(useProducts.getFastFoods);
const loading = ref(true);

watchEffect(() => {
    fastfood.value = useProducts.getFastFoods;
    if (fastfood.value.length > 0) {
        loading.value = false;
        console.log(fastfood.value);
    }
});
const redirect = (id: string) => {
    router.push(`/fastfood/${id}`);
};
</script>

<template>
    <main class="main">
        <h1>Dulces y Salados</h1>
        <!-- Section Juices -->
        <div class="section">
            <h2 class="title_text">Sandwiches</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="sandwich in fastfood" :key="sandwich.id">
                    <div
                        @click="redirect(sandwich.id)"
                        v-show="sandwich.type === 'sandwiches'"
                        class="card"
                    >
                        <img :src="sandwich.imgs[0]" alt="" />
                        <span>{{ sandwich.name }}</span>
                    </div>
                </template>
            </div>
        </div>
        <div class="section">
            <h2 class="title_text">Hamburguesas</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="hamburguesa in fastfood" :key="hamburguesa.id">
                    <div
                        @click="redirect(hamburguesa.id)"
                        v-show="hamburguesa.type === 'hamburguesa'"
                        class="card"
                    >
                        <img :src="hamburguesa.imgs[0]" alt="" />

                        <span>{{ hamburguesa.name }}</span>
                    </div>
                </template>
            </div>
        </div>
        <div class="section">
            <h2 class="title_text">Salchipapas</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="salchipapa in fastfood" :key="salchipapa.id">
                    <div
                        @click="redirect(salchipapa.id)"
                        v-show="salchipapa.type === 'salchipapa'"
                        class="card"
                    >
                        <div class="card_img">
                            <img :src="salchipapa.imgs[0]" alt="" />
                            <img :src="salchipapa.imgs[1]" alt="" />
                        </div>
                        <span>{{ salchipapa.name }}</span>
                    </div>
                </template>
            </div>
        </div>
        <div class="section">
            <h2 class="title_text">Alitas</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="alita in fastfood" :key="alita.id">
                    <div
                        @click="redirect(alita.id)"
                        v-show="alita.type === 'alita'"
                        class="card"
                    >
                        <img :src="alita.imgs[0]" alt="" />

                        <span>{{ alita.name }}</span>
                    </div>
                </template>
            </div>
        </div>
        <div class="section">
            <h2 class="title_text">Fritos</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="frito in fastfood" :key="frito.id">
                    <div
                        @click="redirect(frito.id)"
                        v-show="frito.type === 'frito'"
                        class="card"
                    >
                        <div class="card_img">
                            <img :src="frito.imgs[0]" alt="" />
                            <img :src="frito.imgs[1]" alt="" />
                        </div>
                        <span>{{ frito.name }}</span>
                    </div>
                </template>
            </div>
        </div>
        <div class="section">
            <h2 class="title_text">Platos a la carta</h2>
            <Loader v-if="loading" />
            <div v-else class="container">
                <template v-for="plato in fastfood" :key="plato.id">
                    <div
                        @click="redirect(plato.id)"
                        v-show="plato.type === 'plato'"
                        class="card"
                    >
                        <img :src="plato.imgs[0]" alt="" />

                        <span>{{ plato.name }}</span>
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
