<template>
  <div class="contain-all">
    <div></div>
    <div class="title">
      <el-input
        placeholder="请输入你文章的标题"
        maxlength="100"
        show-word-limit="true"
      ></el-input>
      <el-button>保存草稿</el-button>
      <el-button>发布文章</el-button>
    </div>
    <div class="contain">
      <Editor></Editor>
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
<style lang="scss" scoped>
.contain-all {
  .title {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    .el-input {
      width: 980px;
    }
    .el-button {
      margin: 0;
    }
  }
  :deep(.ql-container) {
    min-height: 400px;
  }
}
</style>
