import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import { createRouter, createWebHashHistory } from "vue-router";
import "./css/app.css";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");