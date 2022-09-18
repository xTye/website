<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationBar",
  props: ["socialmedia"],
  data() {
    return {
      sm: this.socialmedia ? true : false,
    };
  },
});
</script>

<template>
  <div
    class="flex flex-col justify-between items-center w-full h-full z-30 text-white select-none p-25"
  >
    <div class="flex justify-between items-top w-full h-auto">
      <img src="../assets/logo.png" class="h-24 w-24" />
      <div class="flex h-auto">
        <router-link
          :to="'/about'"
          class="duration-0 hover:transition duration-300"
          ><div
            class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
          >
            About
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
          :to="'/pictures'"
          class="duration-0 hover:transition duration-300"
          ><div
            class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
          >
            Pictures
          </div></router-link
        >
        <router-link
          :to="'/videos'"
          class="duration-0 hover:transition duration-300"
          ><div
            class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
          >
            Videos
          </div></router-link
        >
        <router-link
          :to="'/project'"
          class="duration-0 hover:transition duration-300"
          ><div
            class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
          >
            Projects
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
        <router-link
          :to="'/code'"
          class="duration-0 hover:transition duration-300"
          ><div
            class="text-center p-2 w-20 h-auto hover:border-b-2 hover:bg-black hover:bg-opacity-50 transition duration-200"
          >
            Code
          </div></router-link
        >
      </div>
    </div>
    <div v-if="sm" class="flex justify-end items-center w-full h-auto">
      <div class="flex flex-col items-end">
        <div class="pt-3">
          <a href="https://www.instagram.com/tyleriley/" target="_blank"
            >Instagram</a
          >
        </div>
        <div class="pt-3">
          <a
            href="https://www.youtube.com/channel/UCVB1M39xCKe7L12Q23jSIZw"
            target="_blank"
            >YouTube</a
          >
        </div>
        <div class="pt-3">
          <a href="https://www.linkedin.com/in/xtye/" target="_blank"
            >LinkedIn</a
          >
        </div>
        <div class="pt-3">
          <a href="https://github.com/xTye" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>
