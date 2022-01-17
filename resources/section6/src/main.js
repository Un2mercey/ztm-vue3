import { createApp } from "vue"
import app from "./app.vue"
// import Greeting from "./components/Greeting";

const vm = createApp(app);

// vm.component("Greeting", Greeting);

vm.mount("#app");
