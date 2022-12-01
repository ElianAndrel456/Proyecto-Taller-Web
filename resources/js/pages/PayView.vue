<script setup lang="ts">
import { ref } from "vue";
import { priceModify } from "../helper/priceModify";
import { useCartStore } from "../stores/cart";
import router from "../router";
import axios from "axios";
const email = ref("");
const name = ref("");
const address = ref("");
const location = ref("");
const phone = ref("");
const lastname = ref("");
const postal = ref("");
const disableButom = ref(true);

const cartStore = useCartStore();

//! Activar al finalizar la vista de pago
if (cartStore.cart.products.length === 0) {
    router.push("/cart");
}

const sendInfo = async () => {
    if (
        email.value !== "" &&
        name.value !== "" &&
        address.value !== "" &&
        location.value !== "" &&
        phone.value !== "Perú" &&
        lastname.value !== "" &&
        postal.value !== ""
    ) {
        console.log("Pagado");
    } else {
        console.log("Completa campos");
        disableButom.value = false;
    }

    const response = await axios.post(
        "http://localhost:8000/api/create-order",
        {
            total: cartStore.cart.total,
        }
    );

    console.log(response.data);

    //redireccionar a otra pagina de pago paypal
    window.location.href = response.data.links[1].href;
};
</script>

<template>
    <div class="container">
        <h1>Pago</h1>
        <form @submit.prevent="sendInfo" class="form">
            <div>
                <h2>Hola</h2>
                <div class="wrapper">
                    <div class="input-data">
                        <input type="text" required />
                        <div class="underline"></div>
                        <label>Correo electronico</label>
                    </div>
                </div>
                <h3>Direccion de entrega</h3>
                <div class="container_delivery">
                    <div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Nombre</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Direccion</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Localidad</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Telefono</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Apellidos</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label>Codigo postal</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data active">
                                <input
                                    type="text"
                                    value="Perú"
                                    required
                                    readonly
                                />
                                <div class="underline"></div>
                                <label>Pais</label>
                            </div>
                            <div class="info">* Envios nacionales</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_prices">
                <div>
                    <div class="div_price">
                        <span>Subtotal</span
                        ><span>{{ priceModify(cartStore.cart.subtotal) }}</span>
                    </div>
                    <div class="div_price">
                        <span>Impuesto</span
                        ><span>{{ priceModify(cartStore.cart.tax) }}</span>
                    </div>
                    <div class="div_price">
                        <span>Total</span
                        ><span>{{ priceModify(cartStore.cart.total) }}</span>
                    </div>
                </div>
                <input
                    type="submit"
                    v-if="disableButom"
                    class="btn"
                    value="Proceder al pago"
                />
                <input
                    type="submit"
                    v-else
                    disabled
                    class="btn_disable"
                    value="Completar campos"
                />
                <p class="info">
                    Serás redirigido a una página donde podrás completar tu
                    compra de forma segura.
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    width: 80%;
    min-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
}
.container .form {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.container_delivery {
    display: flex;
    justify-content: space-between;
}

.wrapper {
    width: 450px;
    padding: 30px;
}
.wrapper .input-data {
    height: 40px;
    width: 100%;
    position: relative;
}
.wrapper .input-data input {
    height: 100%;
    width: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid silver;
    background-color: var(--color-background);
    color: var(--color-text);
}
.wrapper .input-data input:focus {
    outline: none;
}
.input-data input:focus ~ label,
.input-data input:valid ~ label {
    transform: translateY(-20px);
    font-size: 15px;
    color: var(--color-text);
}
.wrapper .input-data.active input ~ label {
    transform: translateY(-20px);
    font-size: 15px;
    color: var(--color-text);
}
.wrapper .input-data.active input ~ .underline {
    transform: scaleX(1);
    background-color: var(--color-text);
}
.wrapper .input-data label {
    position: absolute;
    bottom: 10px;
    left: 0;
    color: grey;
    pointer-events: none;
    transition: all 0.3s ease;
}
.input-data .underline {
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
}
.input-data .underline:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: var(--color-text);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before {
    transform: scaleX(1);
}
.container_prices {
    width: 450px;
    padding: 30px;
}

.btn {
    width: 100%;
    background-color: var(--color-background);
    color: var(--color-text);
    cursor: pointer;
    height: 60px;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
}
.btn_disable:disabled {
    width: 100%;
    background-color: gray;
    color: var(--color-text);
    cursor: pointer;
    height: 40px;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
}
.btn:hover {
    background-color: var(--color-text);
    color: var(--color-background);
}
.div_price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
}
.info {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: gray;
}
</style>
