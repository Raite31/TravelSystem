<template>
  <div>
    <Head/>
    <div class="contain-all">
      <div class="personal">
        <div class="grid">
          <div class="left">
            <ul class="tag">
              <li v-for="(item,index) in tags" :key="item.index" :class="isactive==index?'addclass':''"
                  @click="onclick(index)">
                <a @click="change_tag_flag">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="right">
            <self_message v-if="tag_flag == '个人资料'"/>
            <self_travel v-else-if="tag_flag == '全部订单'"/>
            <self_blog v-else-if="tag_flag == '我的博客'"/>
            <self_create v-else/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import self_message from "./self_message.vue";
import self_travel from "./self_travel.vue";
import self_blog from "./self_blog.vue";
import self_create from "./self_create.vue";

export default {
  components: {
    Head,
    Footer,
    self_message,
    self_travel,
    self_blog,
    self_create
  },
  data() {
    return {
      tag_flag: this.$route.query.tag_flag
          ? this.$route.query.tag_flag
          : "个人资料",
      tags: {
        0: {
          name: "个人资料"
        },
        1: {
          name: "全部订单"
        },
        2: {
          name: "我的博客"
        },
        3: {
          name: "创作中心"
        }
      },
      isactive: 0
    };
  },
  methods: {
    change_tag_flag(e) {
      this.tag_flag = e.target.innerText;
    },
    onclick(index) {
      this.isactive = index;
    }
  }
};
</script>
<style lang="scss" scoped>
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
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;

  .addclass {
    background-color: rgba(252, 250, 229);
  }

  .personal {
    width: 1200px;
    margin: 0 auto;

    .grid {
      display: grid;
      grid-template-columns: 15% 1fr;
      grid-template-rows: auto auto;
      column-gap: 2px;

      .left {
        .tag {
          list-style: none;
          padding: 10px 0;
          background-color: #fff;

          li {
            a {
              text-align: center;
              list-style: none;
              text-decoration: none;
              color: #282828;
              font-size: 14px;
              display: block;
              padding: 20px 10px;
              margin-right: 0;

              &:hover {
                background-color: rgba(252, 250, 229);
              }
            }
          }
        }
      }

      .right {
        margin-left: 20px;
      }
    }
  }
}
</style>
