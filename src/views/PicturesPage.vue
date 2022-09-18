<script lang="ts">
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "PicturesPage",
  components: {
    NavigationBar,
  },
  setup() {
    const path = "../assets/pictures-page/";
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

    return { path, images };
  },
  methods: {
    makeBoard() {
      return;
    },
  },
  mounted() {
    //this.makeBoard();
  },
};
</script>

<template>
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden bg-black"
  >
    <NavigationBar />
  </div>
</template>
