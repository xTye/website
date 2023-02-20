import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface AuthStore {
  loggedIn: boolean;
  admin: boolean;
}

// export const useAuthStore = defineStore("auth", {
//   state: () => {
//     return { loggedIn: false, admin: false };
//   },
//   function $reset() {
//     localStorage.removeItem("auth");
//     this.$state = { loggedIn: false, admin: false };
//   },
//   getters: {
//     loggedIn: (state) => state.loggedIn,
//     admin: (state) => state.admin,
//   },
//   actions: {
//     set(auth: AuthStore) {
//       this.$state = auth;

//       localStorage.setItem("auth", JSON.stringify(auth));
//     },
//   },
// });

export const useAuthStore = defineStore("auth", () => {
  let initLoggedIn = false;
  let initAdmin = false;

  const ls = localStorage.getItem("auth");

  try {
    const initValues = JSON.parse(ls ? ls : "{}");
    initLoggedIn = initValues.loggedIn || false;
    initAdmin = initValues.admin || false;
  } catch (e) {
    console.log(e);
  }

  const internalLoggedIn = ref(initLoggedIn);
  const internalAdmin = ref(initAdmin);
  const loggedIn = computed(() => internalLoggedIn.value);
  const admin = computed(() => internalAdmin.value);

  function $reset() {
    localStorage.removeItem("auth");
    internalLoggedIn.value = false;
    internalAdmin.value = false;
  }

  function set(auth: AuthStore) {
    internalLoggedIn.value = auth.loggedIn;
    internalAdmin.value = auth.admin;
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  return { loggedIn, admin, set, $reset };
});
