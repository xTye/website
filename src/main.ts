import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "@/router/index";
import store from "./store";
import { initializeApp } from "firebase/app";

export const firebase = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
