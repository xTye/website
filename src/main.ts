import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "@/router/index";
import store from "./store";
import { initializeApp } from "firebase/app";


export const firebase = initializeApp({

});

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
