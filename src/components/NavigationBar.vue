<script lang="ts">
import { defineComponent } from "vue";
import NavHamburgerMenu from "../components/NavHamburgerMenu.vue";
import NavDesktopMenu from "../components/NavDesktopMenu.vue";

export default defineComponent({
  name: "NavigationBar",
  components: {
    NavHamburgerMenu,
    NavDesktopMenu,
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
});
</script>

<template>
  <div>
    <NavDesktopMenu v-if="width > 768" />
    <NavHamburgerMenu v-else />
  </div>
</template>
