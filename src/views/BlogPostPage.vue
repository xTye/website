<script lang="ts">
import { defineComponent } from "vue";
import { db } from "@/main";
import { collection, DocumentData, getDoc, doc } from "firebase/firestore";
import NavigationBar from "../components/NavigationBar.vue";
import { useAuthStore } from "@/store";

export default defineComponent({
  name: "BlogPostPage",
  components: {
    NavigationBar,
  },
  data() {
    let post: DocumentData = {
      title: "",
      description: "",
      date: "",
      image: "",
      embed: "",
    };

    return {
      id: "",
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
      this.id =
        typeof this.$route.params.id === "string"
          ? this.$route.params.id
          : this.$route.params.id[0];

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
    <NavigationBar />
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
      <div class="flex justify-between w-full pb-4">
        <div class="text-3xl border-b-2 border-b-green">
          {{ post.title }}
        </div>
        <div class="text-md">
          {{ parseDate(post.date) }}
        </div>
      </div>
      <div class="flex flex-col items-center md:block">
        <img
          :src="post.image"
          class="object-cover w-full md:w-52 md:h-52 m-4 float-right"
        />
        <div
          class="flex flex-col gap-3 text-lg text-justify"
          v-html="post.description"
        />
      </div>
      <div
        class="flex justify-center items-center my-2 w-1/2 md:w-full"
        v-html="post.embed"
      />
    </div>
  </div>
</template>
