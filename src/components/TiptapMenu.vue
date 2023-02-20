<script lang="ts">
import { Editor } from "@tiptap/core";

export default {
  props: {
    editor: {
      type: Editor,
    },
  },
};
</script>

<template>
  <div
    class="flex justify-left w-full 2xl:justify-between h-12 px-2 bg-white border-x-2 border-t-2 border-black rounded-t-md overflow-y-hidden overflow-x-auto"
  >
    <div class="flex shrink-0 items-center">
      <img
        :src="`/tiptap-menu/bold.svg`"
        alt="bold"
        title="Bold"
        @click="
          () => {
            editor?.commands.toggleBold();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('bold') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/italic.svg`"
        alt="italic"
        title="Italic"
        @click="
          () => {
            editor?.commands.toggleItalic();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('italic') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/underline.svg`"
        alt="underline"
        title="Underline"
        @click="
          () => {
            editor?.commands.toggleUnderline();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('underline') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/strikethrough.svg`"
        alt="strikethrough"
        title="Strike"
        @click="
          () => {
            editor?.commands.toggleStrike();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('strike') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/subscript.svg`"
        alt="subscript"
        title="Subscript"
        @click="
          () => {
            editor?.commands.toggleSubscript();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('subscript') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/superscript.svg`"
        alt="superscript"
        title="Superscript"
        @click="
          () => {
            editor?.commands.toggleSuperscript();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('superscript') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/mark-pen-line.svg`"
        alt="mark-pen-line"
        title="Highlight"
        @click="
          () => {
            editor?.commands.toggleHighlight({ color: '#f1e740' });
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('highlight') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <div class="border-x h-3/5 border-white2 mx-2" />
      <img
        :src="`/tiptap-menu/h-1.svg`"
        alt="heading-1"
        title="Heading-1"
        @click="
          () => {
            editor?.commands.setHeading({ level: 1 });
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('heading', { level: 1 }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/h-2.svg`"
        alt="heading-2"
        title="Heading-2"
        @click="
          () => {
            editor?.commands.setHeading({ level: 2 });
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('heading', { level: 2 }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/h-3.svg`"
        alt="heading-3"
        title="Heading-3"
        @click="
          () => {
            editor?.commands.setHeading({ level: 3 });
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('heading', { level: 3 }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/paragraph.svg`"
        alt="paragraph"
        title="Paragraph"
        @click="
          () => {
            editor?.commands.setParagraph();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('paragraph') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <div class="border-x h-3/5 border-white2 mx-2" />
      <img
        :src="`/tiptap-menu/align-left.svg`"
        alt="align left"
        title="Left Align"
        @click="
          () => {
            editor?.commands.setTextAlign('left');
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive({ textAlign: 'left' }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/align-center.svg`"
        alt="align center"
        title="Center Align"
        @click="
          () => {
            editor?.commands.setTextAlign('center');
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive({ textAlign: 'center' }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/align-right.svg`"
        alt="align right"
        title="Right Align"
        @click="
          () => {
            editor?.commands.setTextAlign('right');
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive({ textAlign: 'right' }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/align-justify.svg`"
        alt="align justify"
        title="Justify Align"
        @click="
          () => {
            editor?.commands.setTextAlign('justify');
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive({ textAlign: 'justify' }) ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/code-box-line.svg`"
        alt="code block"
        title="Code"
        @click="
          () => {
            editor?.commands.toggleCodeBlock();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('codeBlock') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <div class="border-x h-3/5 border-white2 mx-2" />
      <img
        :src="`/tiptap-menu/list-unordered.svg`"
        alt="list-unordered"
        title="Bullet List"
        @click="
          () => {
            editor?.commands.toggleBulletList();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('bulletList') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/double-quotes-l.svg`"
        alt="double-quotes"
        title="Blockquote"
        @click="
          () => {
            editor?.commands.toggleBlockquote();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('blockquote') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/separator.svg`"
        alt="horizontal-ruler"
        title="Horizontal Ruler"
        @click="
          () => {
            editor?.commands.setHorizontalRule();
            editor?.commands.focus();
          }
        "
        :class="`${
          editor?.isActive('horizontalRule') ? 'bg-green' : ''
        } w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
    </div>

    <div class="flex shrink-0 items-center">
      <div class="border-x h-3/5 border-white2 mx-2" />
      <img
        :src="`/tiptap-menu/format-clear.svg`"
        alt="format-clear"
        title="Format Clear"
        @click="
          () => {
            editor?.commands.clearNodes();
            editor?.commands.unsetAllMarks();
            editor?.commands.focus();
          }
        "
        :class="`w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/arrow-go-back-line.svg`"
        alt="arrow-go-backwards"
        title="Undo"
        @click="
          () => {
            editor?.commands.undo();
            editor?.commands.focus();
          }
        "
        :class="`w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
      <img
        :src="`/tiptap-menu/arrow-go-forward-line.svg`"
        alt="arrow-go-forward"
        title="Redo"
        @click="
          () => {
            editor?.commands.redo();
            editor?.commands.focus();
          }
        "
        :class="`w-7 h-7 p-1 hover:bg-blue rounded transition ease-in-out`"
      />
    </div>
  </div>
</template>
