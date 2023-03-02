<template lang="">
  <div>
    <Head />
    <div class="contains">
      <div class="firstScreen">
        <img src="@/assets/imgs/home_travel.png" />
        <div class="search">
          <el-input v-model="searchKeyword"></el-input>
        </div>
      </div>
      <div class="hot">
        <div class="title">热门旅游</div>
        <div class="items">
          <div class="item" v-for="item in hots" :key="item.index">
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
          <div class="item" v-for="item in recommends" :key="item.index">
            <img :src="item.cov" alt="" />
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
        <div class="contain">
          <div class="left"></div>
          <div class="right">
            <ul class="list">
              <li v-for="item in lists" :key="item.index">
                <img :src="item.pic" />
                <div>
                  <div>{{ item.place }}</div>
                  <div>￥{{ item.price }}</div>
                </div>
              </li>
            </ul>
            <ul class="list">
              <li v-for="item in lists2">
                <img :src="item.pic" />
                <div>
                  <div>{{ item.place }}</div>
                  <div>￥{{ item.price }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import {
  getDestinationHots,
  getDestinationRecommend,
  getDestinationLowPrice,
} from "@/api/destination/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      searchKeyword: null,
      hots: null,
      recommends: null,
      lists: null,
      lists2: null,
    };
  },
  methods: {
    getdata() {
      getDestinationHots().then((res) => {
        this.hots = res.data.slice(0, 9);
      });
      getDestinationRecommend().then((res) => {
        this.recommends = res.data.slice(0, 3);
      });
      getDestinationLowPrice().then((res) => {
        this.lists = res.data.slice(0, 3);
        this.lists2 = res.data.slice(4, 7);
      });
    },
  },
  created() {
    this.getdata();
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
}
.contains {
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0 auto;
  .firstScreen {
    img {
      width: 1903px;
      height: 880px;
    }
    .search {
      position: relative;
      width: 807px;
      height: 60px;
      top: -600px;
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
        border-radius: 30px;
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
        img {
          width: 344px;
          height: 230px;
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
    margin-bottom: 100px;
    .title {
      width: 260px;
      font-size: 35px;
      font-weight: 600;
      color: #0437ac;
      line-height: 53px;
      margin: 20px auto;
    }
    .contain {
      width: 1260px;
      margin: 0 auto;
      display: flex;
      .left {
        width: 344px;
        height: 435px;
        background: #0437ac;
        border-radius: 15px 0px 15px 0px;
        opacity: 1;
      }
      .right {
        display: flex;
        justify-content: space-around;
        width: 1096px;
        .list {
          width: 344px;
          margin: 10px;
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          li {
            cursor: pointer;
            display: flex;
            img {
              width: 110px;
              height: 105px;
              border-radius: 30px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
