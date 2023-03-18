<template>
  <div class="contain-all-create">
    <div></div>
    <el-form label-position="left">
      <el-row :gutter="80">
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input
              placeholder="请输入你文章的标题"
              maxlength="100"
              show-word-limit="true"
              v-model="dataForm.title"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="封面图片">
            <div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="简介">
            <el-input
              placeholder="请输入你文章的标题"
              maxlength="100"
              show-word-limit="true"
              type="textarea"
              :rows="6"
              v-model="dataForm.introduce"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="博客详情">
            <Editor v-model="dataForm.detail"></Editor>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标签">
            <VKeywords v-model="dataForm.tags"></VKeywords>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分类">
            <VKeywords v-model="dataForm.classify"></VKeywords>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item>
            <el-button>保存草稿</el-button>
            <el-button @click="submit(dataForm)">发布文章</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import Editor from "@/components/Editor.vue";
import VKeywords from "@/components/VKeywords.vue";
import { createBlog } from "@/api/blog/index";

export default {
  components: {
    Editor,
    VKeywords,
  },
  data() {
    return {
      imageUrl: "",
      content: null,
      editorOption: {},
      dataForm: {
        title: "",
        cov: "",
        introduce: "",
        detail: "",
        tags: [],
        classify: [],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submit(data) {
      createBlog(data);
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.contain-all-create {
  background: white;
  padding: 20px;
  // 图片上传组件
  :deep(.avatar-uploader .el-upload) {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  :deep(.avatar-uploader) {
    margin-top: 43px;
  }
  :deep(.el-upload) {
    float: left;
  }
  :deep(.avatar-uploader .el-upload:hover) {
    border-color: #409eff;
  }
  :deep(.avatar-uploader-icon) {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  :deep(.avatar) {
    width: 178px;
    height: 178px;
    display: block;
  }

  // 富文本
  :deep(.quill-editor) {
    margin-top: 43px;
    background-color: white;
  }
  :deep(.ql-container) {
    min-height: 400px;
  }
}
</style>
