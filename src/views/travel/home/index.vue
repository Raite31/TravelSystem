<template lang="">
  <div>
    <Head />
    <div class="contains">
      <div class="firstScreen">
        <img
          src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.png"
        />
        <div class="search">
          <el-input
            placeholder="去哪儿？"
            v-model="searchKeyword"
            prefix-icon="el-icon-search"
            @keyup.enter.native="searchDestination(searchKeyword)"
          ></el-input>
        </div>
      </div>
      <div class="hot">
        <div class="title">热门旅游</div>
        <div class="items">
          <div
            class="item"
            v-for="item in hots"
            :key="item.index"
            @click="toDetail(item)"
          >
            <img :src="item.photo[0]" alt="" />
            <div class="bottom">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-contain">{{ item.contain }}</div>
              <el-button>查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="title">我们推荐</div>
        <div class="items">
          <div
            class="item"
            v-for="item in recommends"
            :key="item.index"
            @click="toDetail(item)"
          >
            <img :src="item.photo[0]" alt="" />
            <div class="bottom">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-tag">
                <span v-for="item2 in item.tags.slice(0, 3)">{{ item2 }}</span>
              </div>
              <div class="item-date">{{ item.date_time }}</div>
              <div class="item-contain">{{ item.contain }}</div>
              <el-button>订购</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="lowPrice">
        <div class="title">最低价格</div>
        <div class="contain">
          <div class="left"></div>
          <div class="right">
            <ul class="list">
              <li
                v-for="item in lists"
                :key="item.index"
                @click="toDetail(item)"
              >
                <img :src="item.photo[0]" />
                <div class="right">
                  <div class="lowPrice_place">{{ item.place }}</div>
                  <div class="lowPrice_arrow">
                    <img src="@/assets/svg/arrow.svg" alt="" />
                  </div>
                  <div class="lowPrice_price">OT {{ item.price }}￥</div>
                </div>
              </li>
            </ul>
            <ul class="list">
              <li
                v-for="item in lists2"
                :key="item.index"
                @click="toDetail(item)"
              >
                <img :src="item.photo[0]" />
                <div class="right">
                  <div class="lowPrice_place">{{ item.place }}</div>
                  <div class="lowPrice_arrow">
                    <img src="@/assets/svg/arrow.svg" alt="" />
                  </div>
                  <div class="lowPrice_price">OT {{ item.price }}￥</div>
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
    toDetail(item) {
      this.$router.push({
        // 方式一
        // name: "destinationDetail",
        // params: {
        //   id: item.id,
        // },

        // 方式二
        path: `/destination/detail/?id=${item.id}`,
      });
    },
    getdata() {
      getDestinationHots().then((res) => {
        this.hots = res.data.slice(0, 9);
      });
      getDestinationRecommend().then((res) => {
        this.recommends = res.data.slice(0, 3);
      });
      getDestinationLowPrice().then((res) => {
        console.log("res: ", res);
        this.lists = res.data.slice(0, 3);
        this.lists2 = res.data.slice(3, 7);
        console.log("res2: ", this.lists2);
      });
    },
    searchDestination(data) {
      this.$router.push({
        path: "/destination",
        query: {
          keyword: data,
        },
      });
    },
  },
  created() {
    this.getdata();
  },
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
}
.contains {
  width: 100%;
  .firstScreen {
    margin: 50px auto;
    img {
      width: 1270px;
      height: 348px;
    }
    .search {
      position: relative;
      width: 800px;
      height: 60px;
      top: -200px;
      margin: 0 auto;
      border-radius: 50px;
      box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      z-index: 999;
      background: white;
      img {
        width: 40px;
        height: 40px;
      }
      .el-input {
        :deep(.el-input__inner) {
          height: 60px;
          border-radius: 50px;
          font-size: 22px;
          padding-left: 60px;
        }
        :deep(.el-input__prefix) {
          width: 40px;
        }
        :deep(.el-icon-search) {
          margin-top: 10px;
          font-size: 35px;
        }
      }
    }
  }
  .hot {
    .title {
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
        box-sizing: border-box;
        margin: 30px 30px;
        padding-bottom: 10px;

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
        img {
          width: 380px;
          height: 230px;
          border-radius: 10px 10px 0 0;
          margin-bottom: 18px;
        }
        .bottom {
          padding: 0px 26px;
          text-align: left;

          display: flex;
          flex-direction: column;
          align-items: center;

          .item-title {
            width: 100%;
            font-size: 15px;
            font-weight: 600;
            color: #000000;
            line-height: 23px;
            margin-bottom: 10px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-contain {
            width: 293px;
            font-size: 14px;
            font-weight: 500;
            color: #2e2e2e;
            line-height: 21px;

            display: -webkit-box;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;

            margin-bottom: 10px;
          }
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
        box-sizing: border-box;
        margin: 30px 30px;
        padding-bottom: 10px;

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
          width: 380px;
          height: 230px;
          border-radius: 10px 10px 0 0;
          margin-bottom: 18px;
        }
        .bottom {
          padding: 0 26px;
          text-align: left;

          display: flex;
          flex-direction: column;
          align-items: center;
          .item-title {
            width: 100%;
            font-size: 15px;
            font-weight: 600;
            color: #000000;
            line-height: 23px;
            margin-bottom: 10px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-tag {
            margin-bottom: 10px;
          }
          .item-date {
            margin-bottom: 10px;
          }
          .item-contain {
            width: 293px;
            font-size: 14px;
            font-weight: 500;
            color: #2e2e2e;
            line-height: 21px;

            display: -webkit-box;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;

            margin-bottom: 10px;
          }
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
            .right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .lowPrice_place {
                font-size: 20px;
                font-family: Poppins-SemiBold, Poppins;
                font-weight: 600;
                color: #000000;
                line-height: 30px;
              }
              .lowPrice_arrow {
                align-self: flex-end;
                img {
                  height: 20px;
                }
              }
              .lowPrice_price {
                font-size: 20px;
                font-family: Poppins-SemiBold, Poppins;
                font-weight: 600;
                color: #004be4;
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
