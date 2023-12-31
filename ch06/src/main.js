import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

// Pinia 인스턴스 생성
const pinia = createPinia(); // API호출

createApp(App).use(pinia).mount("#app");
