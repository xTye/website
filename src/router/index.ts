import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router/router";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  strict: true,
  routes,
});
