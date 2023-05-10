<template>
  <div class="contain-all-message">
    <div class="myself">
      <div class="avatar_img">
        <el-upload
          action="#"
          class="avatar-uploader"
          :show-file-list="false"
          :http-request="upload"
        >
          <img v-if="form.avatar" :src="form.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="name">{{ form.account }}</div>
    </div>
    <div class="base_message">
      <div class="title">基本信息</div>
      <div class="form">
        <el-form ref="formRef" :model="form" label-width="80px">
          <el-row :gutter="12">
            <el-col :span="24">
              <el-form-item label="用户昵称">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="用户ID">
                <el-input v-model="form.id" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男" value="男"></el-radio>
                  <el-radio label="女" value="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="个人简介">
                <el-input
                  v-model="form.introduce"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="所在地区">
                <el-cascader></el-cascader>
              </el-form-item>
            </el-col> -->
            <el-col :span="24">
              <el-form-item label="出生日期">
                <el-date-picker
                  v-model="form.birthday"
                  placeholder="请输入"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button
            @click="onSubmit(form)"
            type="primary"
            style="
              background-color: rgba(241, 229, 97);
              border: rgba(241, 229, 97, 0.6);
            "
            >保存</el-button
          >
        </el-form>
      </div>
    </div>
    <div class="hobby">
      <div class="title">兴趣标签</div>
      <div class="form">
        <el-form></el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
import { getAuthor, updateAuthor } from "@/api/author/index";
const COS = require("cos-js-sdk-v5");
const cos = new COS({
  SecretId: "AKIDiJk060hqskPhtIRuDYmxkQK9tV2Z8gKw",
  SecretKey: "cBhmppmgZN9rV8jQ3tX1IPL5cu37zd5Z",
});

export default {
  data() {
    return {
      user: null,
      avatar: "",
      form: {
        name: "",
        id: "",
        sex: "",
        introduce: "",
        birthday: "",
        workTime: "",
      },
      formRef: null,
      imageUrl: null,
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
              this.form.avatar = this.imageUrl;
            }
          }
        );
      }
    },
    async onSubmit(data) {
      const res = await updateAuthor(data);
      if (res.data.status == 1) {
        this.$message.success(res.data.msg);
        getAuthor({ id: this.user.id }).then((res) => {
          this.form = res.data[0];
        });
        return;
      }
    },
    initData() {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      getAuthor({ id: this.user.id }).then((res) => {
        this.form = res.data[0];
      });
    },
  },
  created() {
    this.initData();
  },
};
</script>
<style lang="scss" scoped>
.contain-all-message {
  text-align: left;
  background: rgba(252, 250, 229);
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 40px;
  // width: 900px !important;
  .myself {
    background-color: white;
    display: flex;
    padding: 24px 0 40px 24px;
    margin-bottom: 10px;
    border-radius: 10px;

    .avatar_img {
      margin-right: 20px;
      border: 1px dashed #d9d9d9;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      // 头像上传组件
      &:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }

    .name {
      flex: 1;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .base_message {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;

    .title {
      line-height: 48px;
      font-size: 18px;
      font-weight: 600;
      color: #2e2e2e;
      padding-left: 16px;
      border-bottom: 1px solid #f0f0f2;
    }

    .form {
      padding: 32px 0 32px 16px;
    }
  }

  .hobby {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    .title {
      line-height: 48px;
      font-size: 18px;
      font-weight: 600;
      color: #2e2e2e;
      padding-left: 16px;
      border-bottom: 1px solid #f0f0f2;
    }

    .form {
      padding: 32px 74px 32px 16px;
    }
  }
}
</style>
