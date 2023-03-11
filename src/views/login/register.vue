<template>
  <div>
    <div class="top-photo"></div>
    <div class="information">
      <el-form
        :model="dataForm"
        :rules="rules"
        ref="dataForm"
        label-position="left"
        label-width="122px"
      >
        <el-row :gutter="80">
          <el-col>
            <el-form-item>
              <div class="title"></div>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="昵称" prop="name">
              <el-input placeholder="请输入昵称"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="邮箱" prop="email"
              ><el-input placeholder="请输入邮箱"></el-input
            ></el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="城市" prop="city"
              ><el-input placeholder="请选择城市"></el-input
            ></el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="兴趣" prop="hobby"
              ><el-input placeholder="请选择兴趣"></el-input
            ></el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="账号" prop="account"
              ><el-input placeholder="请输入账号"></el-input
            ></el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="密码" prop="password"
              ><el-input placeholder="请输入密码"></el-input
            ></el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-button>创建账号</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataForm: {
        name: null,
        email: null,
        city: [],
        hobby: [],
        account: null,
        password: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
        ],
        city: [
          {
            required: true,
            message: "请选择城市",
            trigger: "change",
          },
        ],
        hobby: [
          {
            required: true,
            message: "请选择兴趣",
            trigger: "change",
          },
        ],
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
