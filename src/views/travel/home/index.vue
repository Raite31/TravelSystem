<template lang="">
  <div>
    <Head></Head>
    <div class="contains">
      <div class="firstScreen">
        <div class="search">
          <el-input v-model="searchKeyword"></el-input>
        </div>
      </div>
      <div class="hot">
        <div class="title">热门旅游</div>
        <div class="items">
          <div class="item" v-for="item in hots">
            <div class="cov"></div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-contain">{{ item.contain }}</div>
            <el-button></el-button>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="title">我们推荐</div>
        <div class="items">
          <div class="item" v-for="item in recommends">
            <div class="cov"></div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-tag">{{ item.tag }}</div>
            <div class="item-date">{{ item.date }}</div>
            <div class="item-contain">{{ item.contain }}</div>
            <el-button></el-button>
          </div>
        </div>
      </div>
      <div class="lowPrice">
        <div class="title">最低价格</div>
        <div class="left"></div>
        <div class="right"></div>
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
      hots: {
        0: {
          cov: "@/assets/imgs/item_photo.png",
          title: "颐和园",
          contain: "你可真牛",
        },
        1: {
          cov: "@/assets/imgs/item_photo.png",
          title: "故宫",
          contain: "你可真牛",
        },
        2: {
          cov: "@/assets/imgs/item_photo.png",
          title: "亚特兰蒂斯",
          contain: "你可真牛",
        },
        3: {
          cov: "@/assets/imgs/item_photo.png",
          title: "颐和园",
          contain: "你可真牛",
        },
        4: {
          cov: "@/assets/imgs/item_photo.png",
          title: "故宫",
          contain: "你可真牛",
        },
        5: {
          cov: "@/assets/imgs/item_photo.png",
          title: "亚特兰蒂斯",
          contain: "你可真牛",
        },
        6: {
          cov: "@/assets/imgs/item_photo.png",
          title: "颐和园",
          contain: "你可真牛",
        },
        7: {
          cov: "@/assets/imgs/item_photo.png",
          title: "故宫",
          contain: "你可真牛",
        },
        8: {
          cov: "@/assets/imgs/item_photo.png",
          title: "亚特兰蒂斯",
          contain: "你可真牛",
        },
        9: {
          cov: "@/assets/imgs/item_photo.png",
          title: "颐和园",
          contain: "你可真牛",
        },
        10: {
          cov: "@/assets/imgs/item_photo.png",
          title: "故宫",
          contain: "你可真牛",
        },
        11: {
          cov: "@/assets/imgs/item_photo.png",
          title: "亚特兰蒂斯",
          contain: "你可真牛",
        },
      },
      recommends: {
        9: {
          cov: "@/assets/imgs/item_photo.png",
          title: "颐和园",
          tag: ["北京", "古建筑", "建筑"],
          contain: "你可真牛",
        },
        10: {
          cov: "@/assets/imgs/item_photo.png",
          title: "故宫",
          tag: ["北京", "古建筑", "建筑"],
          contain: "你可真牛",
        },
        11: {
          cov: "@/assets/imgs/item_photo.png",
          title: "亚特兰蒂斯",
          tag: ["北京", "古建筑", "建筑"],
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
  }
  .hot {
    .title {
      width: 260px;
      font-size: 35px;
      font-weight: 600;
      color: #0437ac;
      line-height: 53px;
      margin: 20px auto;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      width: 1440px;
      margin: 0 auto;
      .item {
        float: left;
        width: 380px;
        height: 452px;
        box-sizing: border-box;
        margin: 30px 30px;
        padding: 26px;
        background: #ffffff;
        box-shadow: 0px 7px 19px 0px rgba(0, 0, 0, 0.25);
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.2);

          // 想做的往右拉伸的效果，没实现完美的
          // width: 813px;
          // background: #ffffff;
          // // box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
          // border-radius: 15px 15px 15px 15px;
          // opacity: 1;
        }
        .item-title {
          width: 211px;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
          line-height: 23px;
        }
        .item-contain {
          width: 293px;
          font-size: 14px;
          font-weight: 500;
          color: #2e2e2e;
          line-height: 21px;
        }
      }
    }
  }
  .recommend {
    .title {
      width: 260px;
      font-size: 35px;
      font-weight: 600;
      color: #0437ac;
      line-height: 53px;
      margin: 20px auto;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      width: 1440px;
      margin: 0 auto;
      .item {
        float: left;
        width: 380px;
        height: 452px;
        box-sizing: border-box;
        margin: 30px 30px;
        padding: 26px;
        background: #ffffff;
        box-shadow: 0px 7px 19px 0px rgba(0, 0, 0, 0.25);
        border-radius: 10px 10px 10px 10px;
        opacity: 1;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.2);

          // 想做的往右拉伸的效果，没实现完美的
          // width: 813px;
          // background: #ffffff;
          // // box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
          // border-radius: 15px 15px 15px 15px;
          // opacity: 1;
        }
        .item-title {
          width: 211px;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
          line-height: 23px;
        }
        .item-contain {
          width: 293px;
          font-size: 14px;
          font-weight: 500;
          color: #2e2e2e;
          line-height: 21px;
        }
      }
    }
  }
  .lowPrice {
    .title {
      width: 260px;
      font-size: 35px;
      font-weight: 600;
      color: #0437ac;
      line-height: 53px;
      margin: 20px auto;
    }
    .left {
      width: 344px;
      height: 435px;
      background: #0437ac;
      border-radius: 15px 0px 15px 0px;
      opacity: 1;
    }
    .right {
      width: 1096px;
    }
  }
}
</style>
