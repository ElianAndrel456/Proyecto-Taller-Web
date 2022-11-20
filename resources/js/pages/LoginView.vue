<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { onAuthStateChanged } from "@firebase/auth";
import { ref, computed } from "vue";
import { signFacebook } from "../firebase/auth";
import { auth } from "../firebase/config";

const userStore = useUserStore();
const email = ref("");
const password = ref("");

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        if (uid) {
            router.push("/user");
        }

        // ...
    } else {
        // User is signed out
        console.log("User is signed out");

        // ...
    }
});

const signWithFacebook = async () => {
    await signFacebook();
    router.push("/user");
};

if (userStore.user.auth) {
    router.push("/user");
}
</script>
<template>
    <div class="container">
        <div class="container_register">
            <h1 class="title">Login</h1>
            <form @submit.prevent="" class="form">
                <div class="container_input">
                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        required
                        v-model="email"
                    />
                    <label class="label">Correo electrónico</label>
                </div>
                <div class="container_input">
                    <input
                        class="input"
                        type="password"
                        v-model="password"
                        required
                    />
                    <label class="label">Contraseña</label>
                </div>
                <input type="submit" value="Login" class="btn" />
            </form>
            <div class="division"></div>
            <div>
                <div class="have">Ingresar con:</div>
                <button class="btn" @click="signWithFacebook">Facebook</button>
                <button class="btn" @click="signWithFacebook">Google</button>
            </div>
            <div class="division"></div>
            <div>
                <div class="have">¿No tienes cuenta una cuenta?</div>
                <RouterLink to="/register">
                    <button class="btn">Crear Una cuenta</button></RouterLink
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title {
    font-size: var(--title);
    margin-bottom: 2rem;
}
.container_register {
    min-width: 400px;
    min-height: 800px;
    padding: 4rem 0;
}
.container_input {
    position: relative;
    width: 100%;
    margin: 4rem 0;
}

.label {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;

    transition: all 0.3s ease;
}
.input {
    background: transparent;
    color: var(--color-text);
    border: none;
    width: 100%;
    border-bottom: 0.1px solid var(--color-text);
    padding: 0.6rem 0;
}
.input:focus {
    outline: none;
}
.input:focus + .label,
.input:valid + .label {
    top: -1.5rem;
    font-size: 0.8rem;
    color: var(--text-hover);
}

.division {
    width: 100%;
    height: 1px;
    background-color: var(--color-text);
    margin: 1.5rem 0;
}
.btn {
    background-color: var(--color-text);
    color: var(--color-background);
    font-weight: bolder;
    font-size: var(--size-navbar-height);
    border: none;
    padding: 0.8rem 0;
    width: 100%;
    margin: 2rem 0;
    cursor: pointer;
}
.have {
    text-align: center;
    font-weight: 900;
}
</style>
