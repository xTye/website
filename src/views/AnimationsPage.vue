<script lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import { defineComponent, ref } from "vue";
import * as THREE from "three";
import { particles } from "../scripts/particles";

export default defineComponent({
  name: "AnimationsPage",
  components: { NavigationBar },
  data() {
    const renderer = new THREE.WebGLRenderer();

    return {
      renderer,
    };
  },
  mounted() {
    let mouseX = 0;
    let mouseY = 0;
    let scrollSpeed = 0;
    let scrollForce = 0;
    const parentDiv = ref<HTMLDivElement | undefined>();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor("#BBD0FF");

    const group = particles(scene);

    camera.position.z = 5;

    // document.addEventListener("mousemove", (e) => {
    //   mouseX = e.clientX / 1000;
    //   mouseY = e.clientY / 1000;
    // });

    document.addEventListener("wheel", (e) => {
      scrollForce += e.deltaY;
    });

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    (this.$refs.parentDiv as unknown as HTMLDivElement).appendChild(
      this.renderer.domElement
    );

    const rend = this.renderer;

    const animate = function (time: number) {
      requestAnimationFrame(animate);

      for (let plane of group.children) {
        plane.rotation.x += Math.random() / 100;
        plane.rotation.y += Math.random() / 100;
        plane.rotation.z += Math.random() / 100;
      }

      if (scrollForce != 0) {
        scrollSpeed += (scrollForce - scrollSpeed) / 10;
        group.rotation.x += scrollSpeed / 10000;
        scrollForce *= 0.9;
      }

      group.rotation.y += 0.0001;
      group.rotation.x += 0.0001;

      rend.render(scene, camera);
    };

    animate(0);
  },
  beforeUnmount() {
    this.renderer.forceContextLoss();
  },
});
</script>

<template>
  <div
    class="relative flex flex-col items-center min-h-screen bg-black text-white overscroll-none"
  >
    <div class="fixed top-0 left-0 text-white" ref="parentDiv"></div>
    <NavigationBar class="fixed z-20" />
    <div class="fixed top-[230px] h-60 w-3/5 z-10">
      <div class="flex w-full h-full text-black gap-4">
        <img src="profphotocrop.png" class="shadow-md rounded-md" />
        <div class="border-l-8 border rounded"></div>
        <div
          class="flex flex-col justify-center gap-6 h-full text-5xl font-roboto"
        >
          <div>Programmer</div>
          <div>Artist</div>
          <div>Gamer</div>
        </div>
      </div>
    </div>
    <div class="relative opacity-95 z-10 top-[600px] shadow-md bg-deepBlack">
      <div class="flex flex-col items-center">
        <div class="flex flex-col w-9/10 my-20 items-start">
          <div
            class="font-semibold text-transparent bg-clip-text text-8xl bg-gradient-to-r from-blue to-green"
          >
            About me
          </div>
          <div class="flex flex-col gap-8 w-full text-lg text-justify">
            <div>
              My name is Tye and I like creating things I'm proud of. The
              purpose of this website was to create a place where all of my
              media can be found in one place. I have many hobbies ranging from
              video editing, coding, game development, gaming, keyboard making,
              3d printing and much more.
            </div>
            <div>
              <div class="text-2xl">Recruiters</div>
              <div class="flex flex-col gap-2">
                <div>
                  I am an upcoming graduate at the University of Central
                  Florida, and I am currently looking for a respectable
                  workplace to hone my talents.
                </div>
                <div class="text-center">
                  <i><b>I am a critical thinker.</b></i>
                </div>
                <div>
                  This is something I rarely find with people I meet. I have a
                  closely knit friend group where we openly share our feelings
                  and thoughts about certain topics. These topics will range
                  from politics to fashion sense, regardless of the topic, we
                  always beg to question. I often compare our logical thinking
                  processes to the Greeks and their way of using formal logic to
                  construct arguments. Much like how I like to construct my
                  arguments, I also like to solve problems using the same
                  systems. From debugging, designing, programming, and managing
                  to creating, exploring, researching, and brainstorming I
                  always ask questions.
                </div>
                <div class="text-center">
                  <i><b>I am a creator.</b></i>
                </div>
                <div>
                  Sometimes, I go out of my way to innovate. This means making
                  new architecture for code, desgining my own graphing stencils,
                  and adding my own personal touches on video edits. In any
                  case, I always like to think outside of the box. Inventing new
                  things is what I find most exciting. Nothing bothers me more
                  than watching someone else do something and trying to
                  replicate it. I strive to impiment my own original ideas and
                  thoughts into my projects.
                </div>
                <div class="text-center">
                  <i><b>I am passionate.</b></i>
                </div>
                <div>
                  It's often that people take note of my passion, more than I
                  care to notice. It's not fabricated or conterfeit. It comes
                  naturally, and varies with the people I am around.
                  Nonetheless, passion alone doesn't get me everywhere. It's the
                  hardwork and dedication that drives me towards reaching my
                  goals. I am well aware that there is no magic formula to life.
                  The reality is that if you do the work, you will get the
                  results you want. I think that alone is why I am so
                  passionate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
