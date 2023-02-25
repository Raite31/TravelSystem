<template>
  <div class="contain-all">
    <div></div>
    <div class="title">
      <el-input placeholder="请输入你文章的标题"></el-input>
    </div>
    <div class="contain">
      <Editor></Editor>
      <el-button>提交</el-button>
    </div>
  </div>
</template>
<script>
import Editor from "@/components/Editor.vue";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      content: null,
      editorOption: {},
    };
  },
};
</script>
<style lang="scss">
.contain-all {
  .title {
    margin-bottom: 10px;
  }
  .ql-container {
    min-height: 400px;
  }
}
</style>
