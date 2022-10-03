<script lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: { NavigationBar },
});
</script>

<template>
  <div
    class="flex flex-col items-center min-h-screen bg-black text-white overscroll-none"
  >
    <NavigationBar />
    <div class="flex flex-col items-center">
      <div class="flex flex-col w-9/10 my-20 items-start">
        <div class="font-semibold text-3xl text-green">
          Hello internet nomad,
        </div>
        <div class="flex flex-col gap-8 w-full text-lg text-justify">
          <div>
            My name is Tye and I like creating things I'm proud of. The purpose
            of this website was to create a place where all of my media can be
            found in one place. I have many hobbies ranging from video editing,
            coding, game development, gaming, keyboard making, 3d printing and
            much more.
          </div>
          <div>
            <div class="text-2xl text-red">Recruiters</div>
            <div class="flex flex-col gap-2">
              <div>
                I am an upcoming graduate at the University of Central Florida,
                and I am currently looking for a respectable workplace to hone
                my talents.
              </div>
              <div class="text-center">
                <i><b>I am a critical thinker.</b></i>
              </div>
              <div>
                This is something I rarely find with people I meet. I have a
                closely knit friend group where we openly share our feelings and
                thoughts about certain topics. These topics will range from
                politics to fashion sense, regardless of the topic, we always
                beg to question. I often compare our logical thinking processes
                to the Greeks and their way of using formal logic to construct
                arguments. Much like how I like to construct my arguments, I
                also like to solve problems using the same systems. From
                debugging, designing, programming, and managing to creating,
                exploring, researching, and brainstorming I always ask
                questions.
              </div>
              <div class="text-center">
                <i><b>I am a creator.</b></i>
              </div>
              <div>
                Sometimes, I go out of my way to innovate. This means making new
                architecture for code, desgining my own graphing stencils, and
                adding my own personal touches on video edits. In any case, I
                always like to think outside of the box. Inventing new things is
                what I find most exciting. Nothing bothers me more than watching
                someone else do something and trying to replicate it. I strive
                to impiment my own original ideas and thoughts into my projects.
              </div>
              <div class="text-center">
                <i><b>I am passionate.</b></i>
              </div>
              <div>
                It's often that people take note of my passion, more than I care
                to notice. It's not fabricated or conterfeit. It comes
                naturally, and varies with the people I am around. Nonetheless,
                passion alone doesn't get me everywhere. It's the hardwork and
                dedication that drives me towards reaching my goals. I am well
                aware that there is no magic formula to life. The reality is
                that if you do the work, you will get the results you want. I
                think that alone is why I am so passionate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
