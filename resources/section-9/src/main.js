import { createApp } from "vue";
import app from "./app.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";

createApp(app)
    .use(store)
    .use(router)
    .mount("#app");
