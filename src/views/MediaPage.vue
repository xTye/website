<script lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MediaPage",
  components: {
    NavigationBar,
  },
  data() {
    return {
      videos: [
        "/media-page/videos/zededit.mp4",
        "/media-page/videos/squishyedit.mp4",
        "/media-page/videos/alrightalmight.mp4",
        "/media-page/videos/simonedit.mp4",
        "/media-page/videos/qiyanaedit.mp4",
        "/media-page/videos/oasis.mp4",
      ],
      titles: [
        "Zed Montage (2019)",
        "Find A Way (2018)",
        "Alright Almight (2018)",
        "Pusha (2018)",
        "Qiyana Edit (2019)",
        "Oasis (2019)",
      ],
      descriptions: [
        "The inspiration behind this edit came from a good friend of mine, Nicholas Drobes. We had this running joke that I wasn't able to play a League of Legends champion. So, I played one game, popped off, made a video edit, and sent him this video.",
        "As I was experiementing with my edits back in 2019, I thought it would be a good idea to deviate from the AMVs I was currently making. At this time, I watched the RLCS Season 6 World Championship where Cloud 9, my favorite team, had won the tournament from starting low in the losers bracket. The intention was to make a video where I highlight their road to victory, using this clip as a flashback to the words of a song. The lyrics during this clip are 'I see the look on everybody faces, They know I'm great but they don't wanna face it.'",
        "This video is dear to me because it's the last serious edit I have made before putting a hold on my editing skills. It's, in my opinion, one of the best edits I've made and arguably better than some of the other top editor AMV channels out there.",
        "This was originally intended to be a music video for the wonderful artist, Simbad. We spent weeks making this music video, but it fell short due to money issues. Nonetheless, shout out to Simbad for wanting to push the boundaries of the music scene.",
        "I was really excited to play Qiyana, a champion in League of Legends, when she first came out. So much so, that I spent hours in the training tool practicing combos and testing the limits of her mechancis. In this video I highlighted the UI that she had for her dash abilities. I compared the UI range for Qiyana's jump to Ekko's jump to emphasize the misleading range upon the ability to dash through walls. In the end, nothing was changed.",
        "During my years in community college, and before I went to Japan, I took several film courses. This short film was made in FIL 1000, where we worked in a small group of 5 people to create a short film. This film the best in the class, and has recieved one award.",
      ],
      currentVideo: 0,
    };
  },
  methods: {
    makeBoard() {
      return;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentVideo = (this.currentVideo + 1) % this.videos.length;
    }, 7000);
  },
});
</script>

<template>
  <div class="flex flex-col pb-5 min-h-screen bg-black overscroll-none">
    <NavigationBar />
    <div
      v-for="(vid, i) in videos"
      :key="i"
      class="hidden md:block relative rounded-xl drop-shadow-md overflow-hidden"
    >
      <div
        class="absolute flex flex-col justify-center items-center w-full h-full z-10 text-white text-opacity-0 hover:bg-black hover:opacity-90 hover:text-opacity-100"
      >
        <div class="text-2xl">{{ titles[i] }}</div>
        <div class="w-9/10 text-justify">{{ descriptions[i] }}</div>
      </div>
      <video
        autoplay
        loop
        muted
        disablePictureInPicture
        disablePopup
        :class="currentVideo === i ? '' : 'hidden'"
        class="-my-1/10"
      >
        <source :src="vid" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex flex-col mt-12 gap-10 justify-center items-center w-full">
      <div class="grid gap-4 grid-cols-3">
        <img src="/media-page/images/div1-11.jpg" />
        <img src="/media-page/images/div1-12.jpg" />
        <img src="/media-page/images/div1-13.jpg" />
        <img src="/media-page/images/div1-21.jpg" />
        <img src="/media-page/images/div1-22.jpg" />
        <img src="/media-page/images/div1-23.jpg" />
        <img src="/media-page/images/div1-31.jpg" />
        <img src="/media-page/images/div1-32.jpg" />
        <img src="/media-page/images/div1-33.jpg" />
      </div>
      <div class="flex justify-center items-center w-full">
        <video
          disablePictureInPicture
          controls
          src="/media-page/videos/fallingdown.mp4"
          poster="/media-page/videos/fallingdown.jpg"
        ></video>
      </div>
      <div class="grid gap-4 grid-cols-3">
        <img src="/media-page/images/div2-11.jpg" />
        <img src="/media-page/images/div2-12.jpg" />
        <img src="/media-page/images/div2-13.jpg" />
        <img src="/media-page/images/div2-21.jpg" />
        <img src="/media-page/images/div2-22.jpg" />
        <img src="/media-page/images/div2-23.jpg" />
        <img src="/media-page/images/div2-31.jpg" />
        <img src="/media-page/images/div2-32.jpg" />
        <img src="/media-page/images/div2-33.jpg" />
      </div>
      <div class="flex justify-center items-center w-full">
        <video
          disablePictureInPicture
          controls
          src="/media-page/videos/reecespieces.mp4"
          poster="/media-page/videos/reecespieces.jpg"
        ></video>
      </div>
      <div class="grid gap-4 grid-cols-3">
        <img src="/media-page/images/div3-11.jpg" />
        <img src="/media-page/images/div3-12.jpg" />
        <img src="/media-page/images/div3-13.jpg" />
        <img src="/media-page/images/div3-21.jpg" />
        <img src="/media-page/images/div3-22.jpg" />
        <img src="/media-page/images/div3-23.jpg" />
        <img src="/media-page/images/div3-31.jpg" />
        <img src="/media-page/images/div3-32.jpg" />
        <img src="/media-page/images/div3-33.jpg" />
      </div>
    </div>
  </div>
</template>
