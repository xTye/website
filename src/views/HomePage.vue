<script lang="ts">
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "HomePage",
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden bg-black"
  >
    <NavigationBar :socialmedia="true" />
    <video
      autoplay
      loop
      muted
      class="absolute opacity-70 z-10 w-auto h-auto min-h-full min-w-full max-w-none bg-black"
    >
      <source src="../assets/zedmontage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
