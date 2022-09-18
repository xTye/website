<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "../components/NavigationBar.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    NavigationBar,
  },
});
</script>

<template>
  <div class="flex flex-col min-h-screen pb-5 bg-black">
    <NavigationBar />
    <div
      class="flex justify-center items-center w-full h-full px-20 text-white"
    >
      To be added...
    </div>
  </div>
</template>
