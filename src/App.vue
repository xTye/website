<script lang="ts">
import NavigationBar from "./components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <div class="bg-gradient-to-r from-blue to-green">
    <div class="w-full fixed z-20"><NavigationBar /></div>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.slide-enter-active {
  animation: slide-out 0.5s ease-in-out;
}
.slide-leave-active {
  animation: slide-in 0.5s ease-in-out;
}

@keyframes slide-in {
  0% {
    transform: translateX(0);
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
  }
}
</style>
