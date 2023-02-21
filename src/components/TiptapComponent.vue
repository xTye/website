<script>
import { ref, defineComponent, Ref } from "vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

import TiptapMenu from "./TiptapMenu.vue";

export default defineComponent({
  components: {
    EditorContent,
    TiptapMenu,
  },

  props: {
    setEditor: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: "",
      extensions: [
        StarterKit,
        Underline,
        Highlight,
        TextAlign,
        Subscript,
        Superscript,
      ],
      editorProps: {
        attributes: {
          class:
            "h-96 focus:outline-none bg-white text-black border-2 border-black p-2 rounded-b-md overflow-auto",
        },
      },
    });

    this.setEditor(this.editor);
  },

  beforeUnmount() {
    this.editor?.destroy();
  },
});
</script>

<template>
  <div>
    <TiptapMenu :editor="editor" />
    <editor-content :editor="editor" />
  </div>
</template>
