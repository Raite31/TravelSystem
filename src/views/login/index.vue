<template lang="">
  <div>
    <Head />
    <section class="section_background">
      <div class="login-box">
        <div class="title">欢迎回来！</div>
        <div class="contain">想要获得独特的优惠？...</div>
        <div class="section_background_sr">
          <el-input
            id="username"
            type="text"
            name="username"
            v-model="username"
            placeholder="请输入账号"
          />
          <el-input
            id="password"
            type="password"
            name="password"
            v-model="password"
            placeholder="请输入密码"
          />
          <div class="function">
            <el-checkbox class="remember" v-model="remember"
              >记住我</el-checkbox
            >
            <a class="forget">忘记密码？</a>
          </div>
          <input
            id="login_sumbit"
            type="submit"
            @click="login_click"
            value="登录"
          />
        </div>
        <div class="forgetmm">
          还没有账号？
          <a href="./regist.html">马上注册</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Head from "@/components/Head.vue";
import { checkLogin } from "@/api/login/index";

export default {
  components: {
    Head,
  },
  data() {
    return {
      remember: false,
      id: 123,
      username: "zhangsan",
      password: "123",
      code: "",
      codeImg: "http://localhost:8080/codeImg?date" + new Date(),
    };
  },
  methods: {
    codeClick() {
      this.codeImg = "http://localhost:8080/codeImg?date" + new Date();
    },
    login_click() {
      checkLogin().then((res) => {
        console.log("res:", res);
      });
      // this.postRequest('/login', {
      //   username: this.username,
      //   password: this.password,
      //   code: this.code,
      // })
      //   .then((res) => {
      //     // 引用element-ui消息
      //     // this.$message.success(res.data); // 放到api.js中去做了
      //     if (res.code == 200) {
      //       // console.log(res.data);
      //       // 去除后端的数据，存到sessionStorage作用域中
      //       sessionStorage.setItem('user', JSON.stringify(res.data));
      //       this.$router.replace('/home'); // 通过路由跳转到Home组件中
      //     }
      //   })
      //   .catch((error) => {
      //     // this.$message.error(res.data);
      //   });

      this.$router.replace("/home");
    },
  },
};
</script>
<style lang="scss">
.section_background {
  width: 100vw;
  height: 100vh;
  .login-box {
    width: 600px;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      width: 276px;
      font-size: 33px;
      font-family: Inter-Regular, Inter;
      font-weight: 400;
      color: #000000;
      line-height: 40px;
      margin-bottom: 14px;
    }
    .contain {
      width: 311px;
      font-size: 16px;
      font-family: Open Sans-Regular, Open Sans;
      font-weight: 400;
      color: #000000;
      line-height: 22px;
      margin-bottom: 23px;
    }

    .section_background_sr {
      background-color: white;
      border-radius: 0.625rem;
      #username,
      #password {
        width: 324px;
        background: #f8f8f8;
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        margin-bottom: 15px;
      }
      .function {
        width: 324px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .remember {
          font-size: 12px;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 16px;
        }

        .forget {
          width: 108px;
          font-size: 12px;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 16px;
          cursor: pointer;
          /*双击不选中*/
          user-select: none;
        }
      }

      #login_sumbit {
        width: 323px;
        height: 58px;
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        border: 2px solid #1c1c1c;

        font-size: 20px;
        color: #1c1c1c;
        line-height: 24px;
        margin-bottom: 50px;
      }
    }

    .forgetmm {
      background-color: rgba(0, 0, 0, 0.4);
      width: 180px;
      padding: 5px;
      box-sizing: border-box;
      color: white;
      font-size: 15px;
      user-select: none;
      border-radius: 12px;
      a {
        color: #000000;
        outline: none;
        text-decoration: none;
      }
    }

    .error_msg {
      width: 400px;
      color: red;
      margin-bottom: 20px;
      font-size: 15px;
    }
  }
}
</style>
