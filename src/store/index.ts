import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({ token: "" }),
  getters: {
    doubleCount: (state) => state.token,
  },
  actions: {
    set(token: string) {
      this.token = token;
    },
  },
});
