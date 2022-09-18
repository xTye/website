<script lang="ts">
export default {
  name: "HomePage",
};
</script>

<template>
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden bg-black"
  >
    <div
      class="flex flex-col justify-between items-center w-full h-full z-30 text-white select-none p-25"
    >
      <div class="flex justify-end items-top w-full h-auto">
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
            :to="'/projects'"
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
        </div>
      </div>
      <div class="flex justify-end items-center w-full h-auto">
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
    <video
      autoplay
      loop
      muted
      class="absolute opacity-70 z-10 w-auto h-auto min-h-full min-w-full max-w-none bg-black"
    >
      <source src="@/assets/zedmontage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
