<script lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
  name: "VideosPage",
  components: {
    NavigationBar,
    VideoPlayer,
  },
};
</script>

<template>
  <div class="flex flex-col pb-5 bg-black">
    <NavigationBar />
    <div class="flex justify-center items-center w-full h-full px-20">
      <video-player
        :src="require('@/assets/fallingdown.mp4')"
        controls
        :loop="true"
        :volume="0.6"
      />
    </div>
  </div>
</template>
