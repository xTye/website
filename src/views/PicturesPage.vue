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
  <div class="flex flex-col pb-5 min-h-screen bg-black">
    <NavigationBar />
    <div class="flex justify-center items-center">
      <div class="grid gap-4 grid-cols-3">
        <img src="@/assets/pictures-page/DSC_0044thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0057thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0122thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0148thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0152thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0457thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0479thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0809thumb.jpg" class="w-68 h-68" />
        <img src="@/assets/pictures-page/DSC_0580thumb.jpg" class="w-68 h-68" />
      </div>
    </div>
  </div>
</template>
