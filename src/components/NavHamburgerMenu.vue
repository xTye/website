<script lang="ts">
import { ref, defineComponent, Ref } from "vue";
import LoginButton from "../components/LoginButton.vue";
export default defineComponent({
  name: "NavHamburgerMenu",
  components: {
    LoginButton,
  },
  data() {
    return {
      open: ref(false),
      init: ref(true),
      backgroundDiv: ref(null) as unknown as Ref<HTMLDivElement>,
      height: ref(window.innerHeight),
    };
  },
  mounted() {
    this.backgroundDiv = this.$refs.backgroundDiv as unknown as HTMLDivElement;

    window.addEventListener("resize", () => {
      this.height = window.innerHeight;
    });
  },
  methods: {
    toggle() {
      this.open = !this.open;
      if (this.init) {
        this.init = false;
        this.backgroundDiv.style.background = `#000000`;
      }
    },
  },
});
</script>

<template>
  <div
    :class="`${open ? '' : ''}`"
    class="relative flex flex-col justify-center items-end w-full text-white select-none p-25"
  >
    <div
      ref="backgroundDiv"
      :class="`${
        init ? '' : open ? 'custom-translate-down' : 'custom-translate-up'
      }`"
      class="absolute h-screen w-full top-0 left-0 pointer-events-none"
    />
    <div
      class="z-[25] flex flex-col gap-1 hover:bg-gradient-to-r hover:from-blue hover:to-green hover:animate-pulse rounded-full p-3"
      @click="toggle"
    >
      <div class="w-6 h-1 bg-white rounded-full" />
      <div class="w-6 h-1 bg-white rounded-full" />
      <div class="w-6 h-1 bg-white rounded-full" />
    </div>
    <div
      :class="`${
        init
          ? 'hidden'
          : open
          ? 'custom-translate-down-text'
          : 'custom-translate-up-text'
      }`"
      class="absolute inset-0 flex flex-col mt-16 w-full min-h-screen items-end gap-2 py-4"
    >
      <router-link :to="'/'" @click="toggle" class="w-full"
        ><div
          class="text-right p-2 pr-10 h-auto hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Home
        </div></router-link
      >
      <router-link :to="'/resume'" @click="toggle" class="w-full"
        ><div
          class="text-right p-2 pr-10 h-auto hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Resume
        </div></router-link
      >
      <router-link :to="'/media'" @click="toggle" class="w-full"
        ><div
          class="text-right p-2 pr-10 h-auto hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Media
        </div></router-link
      >
      <router-link :to="'/blog'" @click="toggle" class="w-full"
        ><div
          class="text-right p-2 pr-10 h-auto hover:bg-black hover:bg-opacity-50 transition duration-200"
        >
          Blog
        </div></router-link
      >
      <div
        class="text-right p-2 pr-10 w-full h-auto hover:cursor-pointer hover:bg-black hover:bg-opacity-50 transition duration-200"
      >
        <LoginButton />
      </div>
    </div>
  </div>
</template>

<style>
.custom-translate-down {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: custom-translate-down-keyframes 0.5s;

  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards; /* When the spec is finished */
}

@keyframes custom-translate-down-keyframes {
  0% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.custom-translate-up {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: custom-translate-up-keyframes 0.5s;

  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards; /* When the spec is finished */
}

@keyframes custom-translate-up-keyframes {
  0% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
}

.custom-translate-down-text {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: custom-translate-down-keyframes 0.5s;
  animation-delay: 0.1s;

  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards; /* When the spec is finished */
}

@keyframes custom-translate-down-keyframes-text {
  0% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.custom-translate-up-text {
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  animation: custom-translate-up-keyframes 0.3s;

  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards; /* When the spec is finished */
}

@keyframes custom-translate-up-keyframes-text {
  0% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0, 0);
  }
}
</style>
