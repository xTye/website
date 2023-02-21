<script lang="ts">
import { defineComponent } from "vue";
import { db } from "@/main";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import NavigationBar from "../components/NavigationBar.vue";
import { useAuthStore } from "@/store";

export default defineComponent({
  name: "BlogPage",
  components: {
    NavigationBar,
  },
  data() {
    let posts: Map<string, DocumentData> = new Map<string, DocumentData>();

    return {
      authStore: useAuthStore(),
      posts,
      parseDate: (date: string) => {
        let parse = date.split(" ");

        if (parse.length >= 4)
          return `${parse[0]} | ${parse[1]}/${parse[2]}/${parse[3]}`;

        return "";
      },
    };
  },
  async mounted() {
    const docs = await getDocs(
      query(collection(db, "blogs"), orderBy("date", "desc"))
    );

    docs.forEach((doc) => {
      this.posts.set(doc.id, doc.data());
    });
  },
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen pb-5 bg-deepBlack">
    <NavigationBar />
    <div
      v-if="authStore.admin"
      class="flex justify-end p-2 w-full h-full lg:w-4/5 text-white"
    >
      <router-link
        :to="`/post`"
        class="bg-gradient-to-r from-blue to-green p-2 rounded-md hover:animate-pulse"
        >Create Post</router-link
      >
    </div>
    <div class="grid grid-cols-3 gap-4 w-full h-full lg:w-4/5 text-white">
      <router-link
        v-for="([id, post], i) in posts"
        :key="id"
        :to="`/blog/${id}`"
        class="flex flex-col bg-gradient-to-r from-blue to-green transition-all hover:scale-105 h-72 hover:cursor-pointer w-full shadow-lg"
      >
        <img class="object-cover w-full h-32" :src="post.image" />
        <div class="flex flex-col justify-between p-4 select-none">
          <div class="text-black font-bold h-full sm:text-xl md:text-4xl">
            {{ post.title }}
          </div>
          <div class="text-black font-bold h-fit text-sm md:text-base">
            {{ parseDate(post.date.toDate().toString()) }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
