<script setup lang="ts">
import { ref } from "vue";
import { createUserWithEmail } from "../firebase/auth";
import izitoast from "izitoast";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
const email = ref("");
const name = ref("");
const lastname = ref("");
const password = ref("");
const userStore = useUserStore();

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

const onRegister = async () => {
    if (
        email.value === "" ||
        name.value === "" ||
        lastname.value === "" ||
        password.value === ""
    ) {
        izitoast.error({
            title: "Error",
            message: "Todos los campos son obligatorios",
            position: "bottomRight",
        });
        return;
    }
    if (password.value.length < 6) {
        izitoast.error({
            title: "Error",
            message: "La contraseña debe tener al menos 6 caracteres",
            position: "bottomRight",
        });
        return;
    }
    if (!email.value.includes("@")) {
        izitoast.error({
            title: "Error",
            message: "El correo no es válido",
            position: "bottomRight",
        });
        return;
    }

    await createUserWithEmail(
        email.value,
        password.value,
        name.value,
        lastname.value
    );
    izitoast.error({
        title: "Success",
        message: "User created successfully",
        position: "topCenter",
        transitionIn: "fadeInUp",
        transitionOut: "fadeOutDown",
        timeout: 1000,
    });
};

if (userStore.user.auth) {
    router.push("/user");
}
</script>
<template>
    <div class="container">
        <div class="container_register">
            <h1 class="title">Registrarse</h1>
            <form class="form" @submit.prevent="onRegister">
                <div class="container_input">
                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        v-model="email"
                        required
                    />
                    <label class="label">Correo electrónico</label>
                </div>
                <div class="container_input">
                    <input class="input" type="text" required v-model="name" />
                    <label class="label">Nombre</label>
                </div>
                <div class="container_input">
                    <input
                        v-model="lastname"
                        class="input"
                        type="text"
                        required
                    />
                    <label class="label">Apellido</label>
                </div>
                <div class="container_input">
                    <input
                        v-model="password"
                        class="input"
                        type="password"
                        required
                    />
                    <label class="label">Contraseña</label>
                </div>
                <input type="submit" value="Crear una cuenta" class="btn" />
            </form>
            <div class="division"></div>
            <div>
                <div class="have">¿Ya tienes una cuenta?</div>
                <RouterLink to="/login">
                    <button class="btn">Login</button></RouterLink
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
    /* border: 1px solid white; */
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
