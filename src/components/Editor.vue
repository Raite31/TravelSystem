<template>
  <quill-editor
      class="editor"
      ref="myQuillEditor"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      v-model="content"
  >
  </quill-editor>
</template>
<script>
import { quillEditor } from "vue-quill-editor";

export default {
  name: "Editor",
  props: {
    value: { type: String }
  },
  data() {
    return {
      content: null,
      editorOption: {}
    };
  },
  watch: {
    value(val) {
      this.content = val;
      console.log("this.content: ", this.content);
    }
  },
  methods: {
    onEditorBlur() {
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
};
</script>

<style lang="scss" scoped></style>
