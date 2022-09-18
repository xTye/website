import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/router";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
