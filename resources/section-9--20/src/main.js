import { createApp } from "vue";
import app from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import "./assets/tailwind.css";
import "./assets/main.css";

let appInstance;

auth.onAuthStateChanged(() => {
    if (!appInstance) {
        appInstance = createApp(app);

        appInstance.use(store);
        appInstance.use(router);
        appInstance.use(VeeValidatePlugin);

        appInstance.mount("#app");
    }
});
