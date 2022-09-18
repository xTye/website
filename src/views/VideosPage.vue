<script lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import "video.js/dist/video-js.css";

export default {
  name: "PicturesPage",
  components: {
    NavigationBar,
  },
  setup() {
    const images = [
      "DSC_0044thumb.jpg",
      "DSC_0044thumb.jpg",
      "DSC_0057thumb.jpg",
      "DSC_0057thumb.jpg",
      "DSC_0122thumb.jpg",
      "DSC_0122thumb.jpg",
      "DSC_0148thumb.jpg",
      "DSC_0148thumb.jpg",
      "DSC_0152thumb.jpg",
      "DSC_0152thumb.jpg",
      "DSC_0457thumb.jpg",
      "DSC_0457thumb.jpg",
      "DSC_0479thumb.jpg",
      "DSC_0479thumb.jpg",
      "DSC_0809thumb.jpg",
      "DSC_0809thumb.jpg",
    ];

    return { images };
  },
  metaInfo: {
    script: [
      { src: "../node_modules/video.js/dist/video.min.js" },
      { src: "../dist/Youtube.min.js" },
    ],
  },
};
</script>

<template>
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden bg-black"
  >
    <NavigationBar />
    <div class="w-full h-full flex justify-center items-center">
      <video
        id="vid1"
        class="video-js vjs-default-skin"
        controls
        preload="auto"
        width="640"
        height="264"
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'
      ></video>
    </div>
  </div>
</template>
