<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "../components/LoginButton.vue";
export default defineComponent({
  name: "NavDesktopMenu",
  components: {
    LoginButton,
  },
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-end h-24 w-full text-white select-none p-25"
  >
    <div class="flex">
      <router-link :to="'/'"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Home
        </div></router-link
      >
      <router-link :to="'/resume'"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Resume
        </div></router-link
      >
      <router-link :to="'/media'"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Media
        </div></router-link
      >
      <router-link :to="'/blog'"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Blog
        </div></router-link
      >
      <div
        class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
      >
        <LoginButton />
      </div>
    </div>
  </div>
</template>
