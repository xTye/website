<script lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: { NavigationBar },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen bg-black text-white">
    <NavigationBar />
    <div class="flex flex-col items-center w-4/5 mt-40">
      <div
        :class="`${
          !loaded ? 'translate-y-100' : ''
        } transition ease-in-out flex justify-between`"
      >
        <div>Test</div>
        <video
          autoplay
          loop
          muted
          disablePictureInPicture
          :class="`w-3/5 h-3/5 rounded-xl drop-shadow-md`"
        >
          <source src="@/assets/zedmontage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>
