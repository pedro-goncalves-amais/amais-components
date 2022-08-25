import { createApp } from "vue";
import App from "./App.vue";
import VWave from "v-wave";
import "../src/assets/css/index.css";
import "virtual:svg-icons-register";

const app = createApp(App);

app.use(VWave);

app.mount("#app");
