<template>
  <div class="contain-all-create">
    <div></div>
    <el-form label-position="left">
      <el-row :gutter="80">
        <el-col :span="24">
          <el-form-item label="标题">
            <el-input
              placeholder="请输入"
              maxlength="100"
              :show-word-limit="true"
              v-model="dataForm.title"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="封面图片">
            <div>
              <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :http-request="upload"
              >
                <img v-if="dataForm.cov" :src="dataForm.cov" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="简介">
            <el-input
              placeholder="请输入"
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
            <vue-editor
              v-model="dataForm.detail"
              placeholder="请输入"
            ></vue-editor>
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
            <el-button
              @click="submit(dataForm)"
              type="primary"
              style="
                background-color: rgba(241, 229, 97);
                border: rgba(241, 229, 97, 0.6);
              "
              >发布文章</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import VKeywords from "@/components/VKeywords.vue";
import { createBlog } from "@/api/blog/index";
const COS = require("cos-js-sdk-v5");
const cos = new COS({
  SecretId: "AKIDmPqDZeWAapshGuOyL2lYCdAbqrfTaVBb",
  SecretKey: "LUbXFwRjmbfXDnPwNbgWM4YyGLDrLk2J",
});

export default {
  components: {
    VueEditor,
    VKeywords,
  },
  data() {
    return {
      content: null,
      editorOption: {},
      imageUrl: null,
      dataForm: {
        uid: "",
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
    upload(res) {
      if (res.file) {
        cos.putObject(
          {
            Bucket: "travel-1310614912" /* 填入您自己的存储桶，必须字段 */,
            Region: "ap-nanjing" /* 存储桶所在地域，例如ap-beijing，必须字段 */,
            Key: res.file
              .name /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
            Body: res.file /* 必须，上传文件对象，可以是input[type="file"]标签选择本地文件后得到的file对象 */,
            onProgress: function (progressData) {
              console.log(JSON.stringify(progressData));
            },
          },
          (err, data) => {
            console.log(err || data);
            if (data.statusCode == 200) {
              this.imageUrl = `https:${data.Location}`;
              // console.log("image: ", this.imageUrl);
              this.dataForm.cov = this.imageUrl;
            }
          }
        );
      }
    },
    submit(data) {
      createBlog(data).then((res) => {
        console.log("res: ", res);
        if (res.status == 200) {
          this.$message.success("创建成功");
          this.$router.push({
            path: `/blogList/blogDetail/?id=${res.data}`,
          });
        }
      });
      console.log(data);
    },
  },
  mounted() {
    this.dataForm.uid = JSON.parse(sessionStorage.getItem("user")).id;
  },
};
</script>
<style lang="scss" scoped>
.contain-all-create {
  background: rgba(252, 250, 229);
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 40px;
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
    background: white;
  }

  :deep(.avatar-uploader .el-upload:hover) {
    border-color: rgba(241, 229, 97, 0.6);
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
  :deep(.quillWrapper) {
    margin-top: 43px;
    background-color: white;
    border-radius: 10px;
    border: none;
  }

  :deep(.ql-container) {
    min-height: 400px;
  }

  :deep(.v-keywords) {
    background-color: white;
  }
  :deep(.v-keywords-action) {
    width: 15%;

    background: rgba(241, 229, 97);
    border-radius: 4px;
    opacity: 1;
    border: 1px solid;
    color: white;
  }
}
</style>
