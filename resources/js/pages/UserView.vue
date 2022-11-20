<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { auth } from "../firebase/config";
const userStore = useUserStore();

if (!userStore.user.auth) {
    router.push("/login");
}

const logoutUser = () => {
    auth.signOut();
    location.reload();
    router.push("/");
    console.log("User signed out!");
};
</script>

<template>
    <main class="main">
        <h1>Hola,{{ userStore.user.name }}</h1>
        <p>Mis Pedidos</p>
        <button @click="logoutUser">Logout</button>
    </main>
</template>

<style scoped>
.main {
    min-height: 100vh;
}
</style>
