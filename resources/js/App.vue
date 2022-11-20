<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SlideNavbar from "./components/SlideNavbar.vue";
import Footer from "./components/Footer.vue";
import { auth, db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useProductsStore } from "./stores/products";
import SlideCart from "./components/SlideCart.vue";
import { onAuthStateChanged } from "@firebase/auth";
import { useUserStore } from "./stores/user";
const useProducts = useProductsStore();

const userStore = useUserStore();

async function getData() {
    const data: any[] = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Productos"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.log(error);
    }
    useProducts.setProducts(data);
    console.log("se ejecuto");
}
getData();

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid, "User is signed in");

        if (user !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);

                userStore.setUser({
                    id: profile.providerId,
                    name: profile.displayName as string,
                    email: profile.email as string,
                    auth: true,
                });
            });
        }

        // ...
    } else {
        // User is signed out
        console.log("User is signed out");

        // ...
    }
});
</script>

<template>
    <SlideCart />
    <Navbar />
    <SlideNavbar />
    <RouterView />
    <!-- 
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>
	<RouterView />
 -->
    <Footer />
</template>

<style scoped>
/* nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
} */
</style>
