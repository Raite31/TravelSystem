<template>
  <div class="contain-all">
    <div></div>
    <el-form label-position="left">
      <el-row :gutter="80">
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input
              placeholder="请输入你文章的标题"
              maxlength="100"
              show-word-limit="true"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="上传图片"> </el-form-item
        ></el-col>
        <el-col :span="24">
          <el-form-item label="简介"> </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="博客详情">
            <Editor></Editor>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标签"> </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分类"></el-form-item>
        </el-col>
        <el-col>
          <el-form-item>
            <el-button>保存草稿</el-button>
            <el-button>发布文章</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
  .quill-editor {
    background-color: white;
  }
  :deep(.ql-container) {
    min-height: 400px;
  }
}
</style>
