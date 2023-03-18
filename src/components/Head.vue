<template lang="">
  <div class="contain_all">
    <!--logo start-->
    <div class="header_logo">
      <a href="javascript:;" class="lww_logo">
        <img src="@/assets/header-small-sprites3.png" alt="" />
      </a>
    </div>
    <!--logo end-->
    <div class="logo_end">
      <ul class="header_nav">
        <li @click="click_nav(1)">
          <router-link
            :class="this.clickFlag == 1 ? 'header_nav_active' : ''"
            to="/home"
            >首页</router-link
          >
        </li>
        <li @click="click_nav(2)">
          <router-link
            :class="this.clickFlag == 2 ? 'header_nav_active' : ''"
            to="/destination"
            >目的地</router-link
          >
        </li>
        <li @click="click_nav(3)">
          <router-link
            :class="this.clickFlag == 3 ? 'header_nav_active' : ''"
            to="/story"
            >旅行故事</router-link
          >
        </li>
        <li @click="click_nav(4)">
          <router-link
            :class="this.clickFlag == 4 ? 'header_nav_active' : ''"
            to="/blogList"
            >博客
          </router-link>
        </li>
      </ul>
      <!--登录的显示start-->
      <div class="login_info">
        <div class="download">
          <router-link class="login" v-if="!userFlag.login" to="/">
            登录
          </router-link>
          <router-link
            class="avatar"
            v-else
            :class="this.clickFlag == 4 ? 'header_nav_active' : ''"
            to="/personal"
          >
            <img :src="require('@/assets/imgs/' + user.avatar)" alt="" />
          </router-link>
        </div>
      </div>
      <ul class="header_nav header_nav2">
        <li @click="click_nav(5)">
          <router-link
            :class="this.clickFlag == 5 ? 'header_nav_active' : ''"
            to="/cart"
            >购物车</router-link
          >
        </li>
      </ul>
    </div>

    <!-- <el-dialog
      title="修改用户信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      action是发送请求
      <el-upload
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :data="this.user"
        action="http://localhost:8080/uploadUserImg"
      >
        <el-image :src="user.headImg" fit="fit"></el-image>
      </el-upload>

      <el-input
        class="update_username"
        v-model="user.username"
        placeholder="请输入用户名"
      ></el-input>
      <el-input v-model="user.password" placeholder="请输入更新密码"></el-input>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="update_click">修 改</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import { getAuthor } from "@/api/author/index";

export default {
  data() {
    return {
      index: 1,
      userFlag: {},
      user: {},
      dialogVisible: false,
      clickFlag: 0,
    };
  },
  mounted() {
    // 从sessionStorage中取出user并转为JSON
    this.userFlag = JSON.parse(sessionStorage.getItem("user"));
    getAuthor({ id: this.userFlag.id }).then((res) => {
      this.user = res.data[0];
    });
  },
  methods: {
    click_nav(val) {
      this.clickFlag = val;
      console.log(this.clickFlag);
    },
    // uploadSuccess(success) {
    //   // 上传头像成功
    //   console.log(success);
    //   // 重新设置头像信息
    //   this.user.headImg = success.data;
    //   // alert(success.data);
    //   this.$message.success(success.msg);
    //   // 更新sessonStorage
    //   this.user.headImg = success.data;
    //   sessionStorage.setItem("user", JSON.stringify(this.user));
    // },
    // uploadError() {
    //   this.$message.error("更新头像失败");
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
    // update_click() {
    //   // 发送请求
    //   this.postRequest("/updateUser", this.user)
    //     .then((success) => {
    //       // 发送请求成功
    //       this.dialogVisible = false;
    //     })
    //     .catch((error) => {
    //       // 发送请求失败
    //     });
    // },

    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>
<style lang="scss">
.contain_all {
  width: 1400px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header_logo {
  }
  .header_nav_active {
    background-color: rgba(0, 0, 0, 0.07);
  }
  .logo_end {
    // width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_nav {
      width: 300px;
      list-style: none;
      display: flex;
      justify-content: space-around;
      li {
        a {
          list-style: none;
          text-decoration: none;
          cursor: pointer;
          color: #282828;
          font-size: 16px;
          padding: 10px;
          border-radius: 30px;
          font-weight: 600;
          &:hover {
            background-color: rgba(0, 0, 0, 0.07);
          }
        }
      }
    }
    .login_info {
      .download {
        .login {
          a {
            list-style: none;
            text-decoration: none;
            cursor: pointer;
            background-color: #282828;
            font-size: 16px;
            padding: 10px;
            border-radius: 30px;
            font-weight: 600;
            color: white;
          }
        }

        .avatar {
          img {
            width: 40px;
            height: 37px;
            border-radius: 50%;
          }
        }
      }
    }
    .header_nav2 {
      width: 80px;
    }
  }
}
</style>
