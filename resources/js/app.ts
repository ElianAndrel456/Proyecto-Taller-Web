import { createApp } from "vue";
import { createPinia } from "pinia";
import "../../node_modules/izitoast/dist/css/iziToast.min.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
    faBars,
    faUser,
    faBagShopping,
    faXmark,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
    faBars,
    faUser,
    faBagShopping,
    faXmark,
    faFacebook,
    faInstagram,
    faHeart
);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
