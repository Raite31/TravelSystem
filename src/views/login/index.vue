<template>
  <div>
    <Head/>
    <div class="login-box">
      <div class="title">欢迎回来！</div>
      <div class="contain">想要获得独特的优惠？</div>
      <el-form :model="loginForm" :rules="rules" ref="loginFrom">
        <el-row :gutter="80">
          <el-col>
            <el-form-item prop="account">
              <el-input
                  id="account"
                  type="text"
                  v-model="loginForm.account"
                  placeholder="请输入账号"
              />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="password">
              <el-input
                  id="password"
                  type="password"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
              />
            </el-form-item>
          </el-col>
          <el-col>
            <div class="function">
              <div class="forget" @click="dialogVisible = true">忘记密码？</div>
            </div>
          </el-col>
          <el-dialog
              title="忘记密码"
              :visible.sync="dialogVisible"
              width="30%">
            <span>请联系平台管理员：13433094759</span>
            <span slot="footer" class="dialog-footer">
            </span>
          </el-dialog>
          <el-col>
            <el-button
                class="download_register"
                @click="login_click(loginForm)"
                @keydown.enter.native="login_click(loginForm)"
            >
              登录/注册
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>


</template>
<script>
import Head from "@/components/Head.vue";
import { checkLogin } from "@/api/login/index";

export default {
  components: {
    Head
  },
  data() {
    return {
      dialogVisible: false,
      id: 123,
      loginForm: {
        account: null,
        password: null
      },
      code: "",
      codeImg: "http://localhost:8080/codeImg?date" + new Date(),
      rules: {
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login_click(data) {
      checkLogin(data)
          .then((res) => {
            console.log("res:", res.data);
            if (res.data.status == -3) {
              this.$message.warning(res.data.msg);
              return;
            } else if (res.data.status == -1) {
              this.$message.error(res.data.msg);
              return;
            } else if (res.data.status == -2) {
              this.$message.warning(res.data.msg);
              return;
            } else if (res.data.status == 1) {
              this.$message.success(res.data.msg);
              // 去除后端的数据，存到sessionStorage作用域中
              sessionStorage.setItem("user", JSON.stringify(res.data.token));
              this.$router.replace("/home");
              return;
            }
          })
          .catch((error) => {
            this.$message.error(res.data.msg);
          });
    }
  },
  created() {
    document.addEventListener("keydown", (e) => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.login_click(this.loginForm);
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.login_click);
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  width: 600px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 33px;
    color: #000000;
    line-height: 40px;
    margin-bottom: 14px;
  }

  .contain {
    font-size: 16px;
    color: #000000;
    line-height: 22px;
    margin-bottom: 23px;
  }

  .el-form {
    width: 320px;

    .el-input {
      width: 324px;
      border-radius: 10px;
    }

    .function {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .forget {
        font-size: 12px;
        color: rgba(28, 28, 28, 0.5);
        line-height: 16px;
        cursor: pointer;
        /*双击不选中*/
        user-select: none;
      }
    }

    .download_register {
      width: 323px;
      border-radius: 10px;
      border: 2px solid #1c1c1c;
      font-size: 20px;
      color: #1c1c1c;
      line-height: 24px;
      margin-bottom: 50px;
    }
  }
}
</style>
