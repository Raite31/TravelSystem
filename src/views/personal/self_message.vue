<template>
  <div class="contain-all-message">
    <div class="myself">
      <div class="avatar_img">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="form.avatar"
            :src="require('@/assets/avatar/' + form.avatar)"
            class="avatar"
          />
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
    };
  },
  methods: {
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
    handleAvatarSuccess(res, file) {
      this.form.avatar = URL.createObjectURL(file.raw);
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
