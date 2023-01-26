<script lang="ts">
import { defineComponent } from "vue";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getAuth,
  getRedirectResult,
  signOut,
} from "firebase/auth";

export default defineComponent({
  name: "LoginButton",

  data() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const loggedIn = false;

    return {
      auth,
      provider,
      loggedIn,
    };
  },
  async mounted() {
    getRedirectResult(this.auth)
      .then((result) => {
        if (!result) return;

        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) this.loggedIn = true;
        else return;

        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },

  methods: {
    async login() {
      signInWithRedirect(this.auth, this.provider);
    },
    async so() {
      signOut(this.auth).then(() => {
        this.loggedIn = false;
      });
    },
  },
});
</script>

<template>
  <button
    @click="
      () => {
        loggedIn ? so() : login();
      }
    "
    class="duration-0 hover:transition duration-300"
  >
    <div
      class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
    >
      {{ loggedIn ? `Sign Out` : `Login` }}
    </div>
  </button>
</template>
