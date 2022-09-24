<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationBar",
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-end w-full h-24 text-white select-none p-25"
  >
    <div class="flex">
      <router-link :to="'/'" class="duration-0 hover:transition duration-300"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Home
        </div></router-link
      >
      <router-link
        :to="'/resume'"
        class="duration-0 hover:transition duration-300"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Resume
        </div></router-link
      >
      <router-link
        :to="'/media'"
        class="duration-0 hover:transition duration-300"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Media
        </div></router-link
      >
      <router-link
        :to="'/blog'"
        class="duration-0 hover:transition duration-300"
        ><div
          class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Blog
        </div></router-link
      >
    </div>
  </div>
</template>
