import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import { router } from "@/router/index";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebase = initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGESENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID,
});

export const db = getFirestore();

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
