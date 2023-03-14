<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="grid">
        <div class="left">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="information">
            <div class="title">{{ title }}</div>
            <div>
              <span class="view">{{ view }}</span>
              <span class="comment">{{ comment }}</span>
            </div>
            <div class="introduce">{{ introduce }}</div>
          </div>
          <hr />
          <div class="precautions">
            <ul>
              <li v-for="item in precautions" :key="item.index">
                {{ item.text }}
              </li>
            </ul>
          </div>
          <hr />
          <div class="illustrate">
            <div class="include">
              <div class="title">包括什么</div>
              <div></div>
            </div>
            <hr />
            <div class="expect">
              <div class="title">期待什么</div>
              <div></div>
            </div>
            <hr />
            <div class="go">
              <div class="title">出发和返回</div>
              <div></div>
            </div>
            <hr />
            <div class="accessibility">
              <div class="title">辅助功能</div>
              <div></div>
            </div>
            <hr />
            <div class="additional_information">
              <div class="title">附加信息</div>
              <div></div>
            </div>
            <hr />
            <div class="cancel">
              <div class="title">取消政策</div>
              <div></div>
            </div>
            <hr />
            <div class="question">
              <div class="title">常见问题</div>
              <div></div>
            </div>
            <hr />
            <div class="help">
              <div class="title">帮助</div>
              <div></div>
            </div>
            <hr />
          </div>
        </div>
        <div class="right">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="photo" style="margin-bottom: 20px">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="sell">
            <div class="title">预留你的位置</div>
            <div class="date">
              <div>
                <el-date-picker></el-date-picker>
                <el-button></el-button>
              </div>
              <el-dialog></el-dialog>
            </div>
            <!-- <p class="tip3">一个预约可用于{{ date }}</p> -->
            <div class="information">
              <div class="title">{{ title }}</div>
              <div class="image"></div>
              <div class="tip4">立即预定并稍后付款符合条件</div>
              <div class="computed">{{ num }}人 x ￥{{ price }}</div>
              <div class="total">Total ￥{{ num * price }}</div>
              <div class="tip">(无额外税费或预定费)</div>
              <el-button class="time">{{ time }}</el-button>
            </div>
            <div class="precautions">
              立即预订并稍后付款符合条件 -
              不确定您的计划？您可以预订一个位置并稍后付款。只需点击“立即预订”即可查看更多付款选项。
            </div>
            <div class="button">
              <el-button class="add_to_cart">添加到购物车</el-button>
              <el-button class="reserve_now">立即预订</el-button>
            </div>
            <div class="tip2">
              免费取消。 3 月 8 日之前随时取消可获得全额退款。
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="operator">
          <div class="title">关于运营商</div>
          <hr />
          <div class="list">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <!-- <div class="comment">
          <div class="title"></div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="comment">
          <title></title>
          <div class="grid">
            <div class="left"></div>
            <div class="right">
              <ul>
                <li>
                  <div class="myself"></div>
                  <div class="title"></div>
                  <div class="contain"></div>
                  <div class="date"></div>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { getDestinationPage } from "@/api/destination/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      // 获取跳转的id
      // 方式一
      // id: this.$route.params.id
      // 方式二
      id: this.$route.query.id,

      list: null,
    };
  },
  methods: {
    getData() {
      console.log("this.id:", this.id);
      getDestinationPage({ id: this.id }).then((res) => {
        this.list = res.data[0];
        console.log("this.list:", this.list);
      });
    },
  },
  created() {
    this.getData();
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
.contain-all {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  hr {
    width: 100%;
    margin: 24px auto;
    border: 0.1px solid #e4e3e3;
  }
  .grid {
    display: grid;
    grid-template-columns: 60% 5fr;
    grid-template-rows: auto auto;
    column-gap: 2px;
    .left {
      text-align: left;
      .photo {
        margin-bottom: 20px;
        img {
          width: 720px;
          height: 406px;
          background-size: cover;
        }
      }
      .information {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        .title {
          font-size: 28px;
          font-weight: bold;
          margin: 8px 0;
        }
        .view {
          margin-bottom: 24px;
        }
        .comment {
          margin-bottom: 24px;
        }
      }
      .precautions {
        ul {
          list-style: none;
          padding-left: 10px;
          display: grid;
          gap: 8px;
        }
      }
      .illustrate {
        div {
          .title {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
    .right {
      .photo {
        img {
          width: 472px;
          height: 201px;
          background-size: cover;
        }
      }
      .sell {
        position: -webkit-sticky;
        position: sticky;
        top: 10px;
        margin-left: 32px;
        align-self: flex-start; // grid也有这个属性设置的效果
        border: 1px solid #f1f1f1;
        border-radius: 12px;
        padding: 24px;
        text-align: left;

        .title {
          font-size: 24px;
          font-weight: bold;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          margin-bottom: 24px;
        }
        .date {
        }
        .tip3 {
          margin: 24px 0;
        }
        .information {
          border: 1px solid black;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 32px;
          .title {
            font-size: 18px;
            font-weight: bold;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            margin-bottom: 8px;
          }
          .tip4 {
            width: fit-content;
            font-weight: bold;
            border: 1px solid black;
            border-radius: 4px;
            padding: 1px 8px;
            margin-bottom: 24px;
            font-size: 10px;
          }
          .computed {
            font-size: 14px;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
          }
          .total {
            font-size: 16px;
            font-weight: bold;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            margin: 4px 0;
          }
          .tip {
            font-size: 12px;
            color: #7e7676;
            margin-bottom: 16px;
          }
          .time {
          }
        }
        .precautions {
          font-size: 14px;
          margin-bottom: 16px;
        }
        .button {
          display: flex;
          justify-content: space-around;
          margin-bottom: 24px;
          .add_to_cart,
          .reserve_now {
            width: 190px;
            height: 48px;
            border-radius: 24px;
            background: #f2b203;
            border-color: #f2b203;
            color: #000;
            font-weight: bold;
          }
        }
        .tip2 {
          font-size: 16px;
        }
      }
    }
  }
  .bottom {
    text-align: left;
  }
}
</style>
