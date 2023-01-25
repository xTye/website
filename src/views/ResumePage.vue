<script lang="ts">
import { ref } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "ResumePage",
  components: {
    NavigationBar,
    VuePdfEmbed,
  },
  data() {
    return {
      sourceGame: "/resume_game.pdf",
      sourceSoft: "/resume_soft.pdf",
      wrapper: ref<HTMLElement>(),
    };
  },
};
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen h-full bg-black">
    <NavigationBar />
    <div class="flex flex-col w-11/12 p-3 gap-4 justify-center" ref="wrapper">
      <div class="text-white">
        Note: Relevant links are associated with project titles and social media
        icons.
      </div>
      <vue-pdf-embed class="w-full" :source="sourceGame" />
      <vue-pdf-embed class="w-full" :source="sourceSoft" />
    </div>
  </div>
</template>
