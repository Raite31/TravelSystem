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
        <li
          @click="click_nav(1)"
          @mouseenter="select_nav(1)"
          :class="nav_select == 1 ? 'header_nav_hover' : ''"
        >
          <router-link to="/home">首页</router-link>
        </li>
        <li
          @click="click_nav(2)"
          @mouseenter="select_nav(2)"
          :class="nav_select == 2 ? 'header_nav_hover' : ''"
        >
          <router-link to="/destination">目的地</router-link>
        </li>
        <li
          @click="click_nav(4)"
          @mouseenter="select_nav(4)"
          :class="nav_select == 4 ? 'header_nav_hover' : ''"
        >
          <router-link to="/story">旅行故事</router-link>
        </li>
        <li
          @click="click_nav(6)"
          @mouseenter="select_nav(6)"
          :class="nav_select == 6 ? 'header_nav_hover' : ''"
        >
          <router-link to="/blogList">博客</router-link>
        </li>
      </ul>
      <!--登录的显示start-->
      <div class="login_info">
        <div class="download">
          <a href="javascript:;" title="退出登录" 
            >退出登录
          </a>
        </div>
      </div>
    </div>

    <el-dialog
      title="修改用户信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- action是发送请求 -->
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
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      index: 1,
      nav_select: 0,
      user: {
        id: "",
        username: "",
        password: "",
        headImg: "",
      },
      dialogVisible: false,
    };
  },
  mounted() {
    // 从sessionStorage中取出user并转为JSON
    let user = JSON.parse(sessionStorage.getItem("user"));
    // 拷贝
    Object.assign(this.user, user);
    // console.log(this.user);
  },
  methods: {
    uploadSuccess(success) {
      // 上传头像成功
      console.log(success);
      // 重新设置头像信息
      this.user.headImg = success.data;
      // alert(success.data);
      this.$message.success(success.msg);
      // 更新sessonStorage
      this.user.headImg = success.data;
      sessionStorage.setItem("user", JSON.stringify(this.user));
    },
    uploadError() {
      this.$message.error("更新头像失败");
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
    update_click() {
      // 发送请求
      this.postRequest("/updateUser", this.user)
        .then((success) => {
          // 发送请求成功
          this.dialogVisible = false;
        })
        .catch((error) => {
          // 发送请求失败
        });
    },
    select_nav(val) {
      this.nav_select = val;
    },
    click_nav(val) {
      this.index = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
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
  .logo_end {
    width: 450px;
    display: flex;
    justify-content: space-between;
    .header_nav {
      width: 300px;
      list-style: none;
      display: flex;
      justify-content: space-around;

      li {
        padding: 10px;
        border-radius: 30px;
        text-align: center;
        margin-right: 10px;
        a {
          list-style: none;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          color: #282828;
          font-weight: 600;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.07);
        }
      }
    }
    .login_info {
      width: 100px;
      display: flex;
      justify-content: right;
      align-items: center;
      div {
        padding: 10px;
        font-size: 16px;
        border-radius: 30px;
        text-align: center;
        cursor: pointer;
        a {
          list-style: none;

          text-decoration: none;
          color: #282828;
        }
        font-weight: 600;
        margin-right: 10px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.07);
        }
      }
      .download {
        background: #282828;
        a {
          color: white;
        }
        &:hover {
          background: #282828;
        }
      }
    }
  }
}
</style>
