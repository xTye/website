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
      source: "./resume.pdf",
      wrapper: ref<HTMLElement>(),
    };
  },
};
</script>

<template>
  <div class="flex flex-col items-center h-full bg-black">
    <NavigationBar />
    <div class="w-11/12 p-3" ref="wrapper">
      <vue-pdf-embed :source="source" />
    </div>
  </div>
</template>
