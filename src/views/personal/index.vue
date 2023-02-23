<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="grid">
        <div class="left">
          <ul class="tag">
            <li v-for="item in tags" :key="item.index">
              <a href="">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <self_message></self_message>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import self_message from "./self_message.vue";
import self_travel from "./self_travel.vue";
import self_blog from "./self_blog.vue";

export default {
  components: {
    Head,
    Footer,
    self_message,
  },
  data() {
    return {
      tags: {
        0: {
          name: "个人资料",
        },
        1: {
          name: "账号设置",
        },
        2: {
          name: "隐私设置",
        },
        3: {
          name: "信息认证",
        },
        4: {
          name: "我的收藏",
        },
        5: {
          name: "浏览历史",
        },
      },
    };
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.contain-all {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  .grid {
    display: grid;
    grid-template-columns: 20% 5fr;
    grid-template-rows: auto auto;
    column-gap: 2px;
    .left {
      .tag {
        list-style: none;
        padding: 10px 0;
        li {
          background-color: #fff;
          a {
            list-style: none;
            text-decoration: none;
            color: #282828;
            font-size: 16px;
            display: block;
            padding: 30px 10px;
            margin-right: 0;
          }
        }
      }
    }
    .right {
      margin-left: 20px;
    }
  }
}
</style>
