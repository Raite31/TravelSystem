<template>
  <div class="contain-all-message">
    <div class="myself">
      <div class="avatar">
        <img :src="require('@/assets/imgs/' + form.avatar)" alt="" />
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
                <el-input v-model="form.name"> </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="用户ID">
                <el-input v-model="form.id"></el-input>
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
                <el-input v-model="form.introduce"></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="所在地区">
                <el-cascader></el-cascader>
              </el-form-item>
            </el-col> -->
            <el-col :span="24">
              <el-form-item label="出生日期">
                <el-date-picker v-model="form.birthday"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button @click="onSubmit(form)">保存</el-button>
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
  // width: 900px !important;
  .myself {
    background-color: white;
    display: flex;
    padding: 24px 0 40px 24px;
    margin-bottom: 10px;
    .avatar {
      img {
        width: 93px;
        height: 93px;
        border-radius: 50%;
        margin-right: 16px;
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
