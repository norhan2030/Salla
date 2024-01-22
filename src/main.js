import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import '@fortawesome/fontawesome-free/css/all.css';
import './axios'

createApp(App).use(store).use(router).mount("#app");