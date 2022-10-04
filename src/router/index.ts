import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router/router";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  strict: true,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name) document.title = `${to.name.toString()} | Tye`;
  next();
});
