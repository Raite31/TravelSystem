<template lang="">
  <div>
    <Head></Head>
    <div class="contains">
      <div class="firstScreen">
        <div class="search">
          <el-input v-model="searchKeyword"></el-input>
        </div>
      </div>
      <div class="recommend">
        <div class="item" v-for="item in items">
          <div class="cov"></div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-tag">{{ item.tag }}</div>
          <div class="item-date">{{ item.date }}</div>
          <div class="item-contain">{{ item.contain }}</div>
          <el-button></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import Head from "@/components/Head.vue";

export default {
  components: {
    Head,
  },
  data() {
    return {
      searchKeyword: null,
      items: {
        0: {
          title: "颐和园",
          tag: ["北京", "古建筑", "建筑"],
          date: "2008-12-30",
          contain: "你可真牛",
        },
        1: {
          title: "故宫",
          tag: ["北京", "古建筑", "建筑"],
          date: "2008-12-30",
          contain: "你可真牛",
        },
        2: {
          title: "亚特兰蒂斯",
          tag: ["北京", "古建筑", "建筑"],
          date: "2008-12-30",
          contain: "你可真牛",
        },
      },
    };
  },
  methods: {},
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
}
body {
  background: url("@/assets/imgs/home_travel.png") 50% 50% no-repeat;
  background-size: 100% 99%;
}
.contains {
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0 auto;
  .firstScreen {
    width: 100%;
    height: 100%;
    // background: url("@/assets/imgs/home_travel.png") 50% 50% no-repeat;
    // background-size: cover;
    .search {
      position: relative;
      width: 807px;
      height: 60px;
      top: 180px;
      margin: 0 auto;
      border-radius: 50px;
      box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      .el-input__inner {
        font-size: 18px;
        width: 100%;
        border-radius: 50px;
        height: 60px;
        line-height: 36px;
        opacity: 0.3;
      }
    }
    .recommend {
      display: flex;
    }
  }
}
</style>
