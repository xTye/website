<script lang="ts">
import { ref, defineComponent, Ref } from "vue";
import { db } from "@/main";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import NavigationBar from "../components/NavigationBar.vue";
import TiptapComponent from "../components/TiptapComponent.vue";
import { useAuthStore } from "@/store";
import { Editor } from "@tiptap/vue-3";

export default defineComponent({
  name: "UpdatePostPage",
  components: {
    NavigationBar,
    TiptapComponent,
  },
  data() {
    let id = "";
    let error = "";
    let title = "";
    let image = "";
    let description = "";
    let embed = "";
    let editor: Ref<Editor | null> = ref(null);

    return {
      authStore: useAuthStore(),
      id,
      error,
      title,
      image,
      description,
      embed,
      editor,
      parseDate: (date: string) => {
        let parse = date.split(" ");

        if (parse.length >= 4)
          return `${parse[0]} | ${parse[1]}/${parse[2]}/${parse[3]}`;

        return "";
      },
    };
  },

  async mounted() {
    if (!this.authStore.admin) this.$router.push("/");

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

      this.title = data.title;
      this.image = data.image;
      this.description = data.description;
      this.embed = data.embed;
      this.editor?.commands.setContent(data.description);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async submit() {
      this.description = this.editor?.getHTML() || "";

      try {
        await updateDoc(doc(collection(db, "blogs"), this.id), {
          title: this.title,
          image: this.image,
          description: this.description,
          embed: this.embed,
          upDate: Timestamp.fromDate(new Date()),
        });

        this.$router.push(`/blog/${this.id}`);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen pb-5 bg-deepBlack">
    <NavigationBar />
    <div
      class="flex flex-col justify-center items-center w-full h-full lg:w-4/5 text-white"
    >
      <div class="w-full mb-8">
        <div class="text-5xl font-bold">Update a post.</div>
      </div>
      <div class="flex flex-col w-full gap-8 justify-center">
        <div class="flex justify-between gap-4">
          <div class="w-full">
            <div class="text-xl font-bold">Title</div>
            <input
              type="text"
              class="w-full text-lg p-2 text-black"
              v-model="title"
            />
          </div>
          <div class="w-full">
            <div class="text-xl font-bold">Image</div>
            <input
              type="text"
              class="w-full text-lg p-2 text-black"
              v-model="image"
            />
          </div>
        </div>
        <div>
          <div class="text-xl font-bold">Description</div>
          <TiptapComponent :setEditor="(_editor: Editor) => editor = _editor" />
        </div>
        <div>
          <div class="text-xl font-bold">Embed</div>
          <input
            type="text"
            class="w-full text-lg p-2 text-black"
            v-model="embed"
          />
        </div>

        <button
          class="text-xl bg-green rounded w-1/5 hover:bg-green2"
          @click="submit"
        >
          Submit
        </button>

        <div>
          <div class="text-xl font-bold text-red">{{ error }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
