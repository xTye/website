<script lang="ts">
import { defineComponent } from "vue";
import { db } from "@/main";
import { collection, DocumentData, getDoc, doc } from "firebase/firestore";
import { useAuthStore } from "@/store";

import LoadingComponent from "@/components/LoadingComponent.vue";

export default defineComponent({
  name: "BlogPostPage",
  components: {
    LoadingComponent,
  },
  data() {
    let post: DocumentData | undefined;

    return {
      id:
        typeof this.$route.params.id === "string"
          ? this.$route.params.id
          : this.$route.params.id[0],
      post,
      authStore: useAuthStore(),
      parseDate: (date: string) => {
        let parse = date.split(" ");

        if (parse.length >= 4)
          return `${parse[0]} | ${parse[1]}/${parse[2]}/${parse[3]}`;

        return "";
      },
    };
  },
  async mounted() {
    try {
      const post = await getDoc(doc(collection(db, "blogs"), this.id));
      const data = post.data();

      if (!data) {
        this.$router.push("/blog");
        return;
      }

      this.post = data;
      this.post.date = data.date.toDate().toString();
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen pb-5 bg-deepBlack">
    <div class="w-full fixed z-[19] h-24 bg-deepBlack" />
    <div class="mt-24" />
    <div
      class="flex flex-col justify-center items-center w-full h-full lg:w-4/5 text-white"
    >
      <div
        v-if="authStore.admin"
        class="flex justify-end p-2 w-full text-white"
      >
        <router-link
          :to="`/post/${id}`"
          class="bg-gradient-to-r from-blue to-green p-2 rounded-md hover:animate-pulse"
          >Edit Post</router-link
        >
      </div>
      <div v-if="post" class="w-full">
        <div class="flex justify-between w-full pb-4">
          <div class="text-3xl border-b-2 border-b-green">
            {{ post.title }}
          </div>
          <div class="text-md">
            {{ parseDate(post.date) }}
          </div>
        </div>
        <div class="flex flex-col w-full items-center md:block">
          <img
            :src="post.image"
            class="object-cover md:w-52 md:h-52 md:float-right m-4"
          />
          <div
            class="flex flex-col gap-3 text-lg text-justify w-full md:w-[auto]"
            v-html="post.description"
          />
        </div>
        <div
          class="flex justify-center items-center my-2"
          v-html="post.embed"
        />
      </div>

      <LoadingComponent v-else />
    </div>
  </div>
</template>
