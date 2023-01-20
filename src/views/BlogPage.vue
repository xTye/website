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

export default defineComponent({
  name: "BlogPage",
  components: {
    NavigationBar,
  },
  data() {
    let posts: DocumentData[] = [];

    return {
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
      this.posts.push(doc.data());
    });
  },
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen pb-5 bg-black">
    <NavigationBar />
    <div
      class="flex flex-col justify-center items-center w-full h-full lg:w-4/5 text-white"
    >
      <div
        v-for="(post, i) in posts"
        :key="i"
        :class="i % 2 == 0 ? 'bg-black2' : ''"
        class="flex flex-col w-full p-4 mb-20 border-b-2 border-b-blue rounded-md shadow-lg"
      >
        <div class="flex justify-between pb-4">
          <div class="text-3xl border-b-2 border-b-green">
            {{ post.title }}
          </div>
          <div class="text-md">
            {{ parseDate(post.date.toDate().toString()) }}
          </div>
        </div>
        <div>
          <img
            :src="post.image"
            class="object-cover w-52 h-52 m-4 float-right"
          />
          <div class="text-lg text-justify">
            {{ post.description }}
          </div>
        </div>
        <div class="flex justify-center items-center my-2">
          <div class="w-1/2" v-html="post.embed"></div>
        </div>
      </div>
    </div>
  </div>
</template>
