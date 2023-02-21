<script lang="ts">
import { defineComponent } from "vue";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getAuth,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
  signOut,
} from "firebase/auth";
import { useAuthStore } from "../store";
import { TYE_UID } from "../main";

export default defineComponent({
  name: "LoginButton",

  data() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const authStore = useAuthStore();

    return {
      auth,
      provider,
      authStore,
    };
  },
  async mounted() {
    getRedirectResult(this.auth)
      .then((result) => {
        if (!result) return;

        this.authStore.set({
          loggedIn: true,
          admin: result.user.uid === TYE_UID,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    async login() {
      await setPersistence(this.auth, browserLocalPersistence);

      signInWithRedirect(this.auth, this.provider);
    },
    async so() {
      signOut(this.auth).then(() => {
        this.authStore.$reset();
      });
    },
  },
});
</script>

<template>
  <button
    @click="
      () => {
        authStore.loggedIn ? so() : login();
      }
    "
    class=""
  >
    <div>
      {{ authStore.loggedIn ? `Sign Out` : `Login` }}
    </div>
  </button>
</template>
