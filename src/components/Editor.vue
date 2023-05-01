<template>
  <quill-editor
      class="editor"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      v-model="props.value"
  >
  </quill-editor>
</template>
<script>
import { quillEditor } from "vue-quill-editor";

export default {
  name: "Editor",
  props: {
    value: String
  },
  data() {
    return {
      content: null,
      editorOption: {}
    };
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
