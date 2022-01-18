import { createApp } from "vue";
import app from "./app.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";

const appInstance = createApp(app);
appInstance.use(store);
appInstance.use(router);
appInstance.mount("#app");
