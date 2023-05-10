<template>
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
        <li>
          <router-link
            :class="this.pathName == 'home' ? 'header_nav_active' : ''"
            to="/home"
          >
            首页
          </router-link>
        </li>
        <li>
          <router-link
            :class="this.pathName == 'destination' ? 'header_nav_active' : ''"
            to="/destination"
          >
            目的地
          </router-link>
        </li>
        <li>
          <router-link
            :class="this.pathName == 'story' ? 'header_nav_active' : ''"
            to="/story"
          >
            旅行故事
          </router-link>
        </li>
        <li>
          <router-link
            :class="this.pathName == 'blogList' ? 'header_nav_active' : ''"
            to="/blogList"
          >
            博客
          </router-link>
        </li>
      </ul>
      <!--登录的显示start-->
      <div class="login_info">
        <div class="download">
          <router-link class="login" v-if="!userFlag.login" to="/">
            登录
          </router-link>
          <router-link class="avatar" v-else to="/personal">
            <img
              :src="
                user.avatar ? require('@/assets/avatar/' + user.avatar) : ''
              "
              alt=""
            />
          </router-link>
        </div>
      </div>
      <ul class="header_nav header_nav2">
        <li>
          <router-link
            :class="this.pathName == 'cart' ? 'header_nav_active' : ''"
            to="/cart"
          >
            购物车
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getAuthor } from "@/api/author/index";

export default {
  data() {
    return {
      index: 1,
      userFlag: {},
      user: {
        avatar: null,
      },
      dialogVisible: false,
      clickFlag: 0,
      pathName: this.$route.name,
    };
  },
  mounted() {
    // 从sessionStorage中取出user并转为JSON
    this.userFlag = JSON.parse(sessionStorage.getItem("user"));
    getAuthor({ id: this.userFlag.id }).then((res) => {
      this.user = res.data[0];
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
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
    background-color: rgba(241, 229, 97, 0.6);
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
      padding: 0 20px;

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
            background-color: rgba(250, 244, 183, 0.6);
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
            background-color: rgba(241, 229, 97, 0.6);
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
