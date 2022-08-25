import { createApp } from "vue";
import App from "./App.vue";
import VWave from "v-wave";
import "../src/assets/css/index.css";

const app = createApp(App);

app.use(VWave);

app.mount("#app");
