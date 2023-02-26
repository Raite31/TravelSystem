<template>
  <div>
    <Head />
    <div class="contain-all">
      <h1 class="title">购物车</h1>
      <div class="link">
        <router-link
          :to="{ path: '/personal', query: { tag_flag: '全部订单' } }"
          >查看所有订单</router-link
        >
      </div>

      <div class="list">
        <ul>
          <div v-for="item in orders" :key="item.index">
            <li>
              <div class="cov">
                <img src="" alt="" />
              </div>
              <div class="detail">
                <div class="list_title">{{ item.title }}</div>
                <div class="introduce">{{ item.introduce }}</div>
                <div class="date_and_time">{{ item.date_and_time }}</div>
                <div>
                  <span class="human">
                    {{ item.human }} Adults x
                    <span style="font-weight: bold">RMB{{ item.price }}</span>
                  </span>
                  <span class="total" style="font-weight: bold">
                    {{ item.human * item.price }}
                  </span>
                </div>
                <div class="information">
                  <span v-for="item2 in item.information" :key="item2.index">
                    {{ item2 }}
                  </span>
                </div>
              </div>
              <div class="checkbox">
                <input type="checkbox" v-model="item.status" />
              </div>
            </li>

            <hr />
          </div>
        </ul>
      </div>
      <div class="nav-holder" ref="scrollOne">
        <div class="nav-left">
          <div class="select-all">
            <input type="checkbox" name="selectAll" />
            <label for="selectAll">全选</label>
          </div>
          <button class="del">删除</button>
        </div>
        <div class="nav-right">
          <div class="num">已选 个去向</div>
          <div class="total">总价</div>
          <button class="settlement">结算</button>
        </div>
      </div>

      <div class="nav" ref="listheight" v-if="show">
        <div class="nav-left">
          <div class="select-all">
            <input type="checkbox" name="selectAll" />
            <label for="selectAll">全选</label>
          </div>
          <button class="del">删除</button>
        </div>
        <div class="nav-right">
          <div class="num">已选 个去向</div>
          <div class="total">总价</div>
          <button class="settlement">结算</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      show: true,
      orders: {
        0: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        1: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: true,
        },
        2: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        3: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        4: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: true,
        },
        5: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        6: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        7: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        8: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        9: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
        10: {
          title: "2-Hour Snorkeling in Two Spots of Tulum's Reef",
          introduce:
            "2-Hour Snorkeling in Two Spots of Tulum's Reef - 10:00 AM",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 56.7,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8",
          ],
          status: false,
        },
      },
    };
  },
  methods: {
    showBar() {
      let oneHeight = this.$refs.scrollOne.getBoundingClientRect().top;
      if (oneHeight < 911) {
        //这是滑动到scrollTwo的距离要做的操作
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showBar);
  },
  destroyed() {
    document.removeEventListener("scroll", this.showBar);
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
  background: #f1f1f1;
}

.contain-all {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: left;
  hr {
    width: 100%;
    margin: 24px auto;
    border: 0.1px solid #e4e3e3;
  }
  .title {
    line-height: 50px;
    margin-bottom: 8px;
  }
  .link {
    margin-bottom: 8px;
    a {
      color: black;
      font-size: 12px;
    }
  }

  .list {
    padding: 20px 0;
    background-color: white;
    ul {
      list-style: none;
      li {
        background-color: rgb(244 243 243);
        display: flex;
        align-items: center;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;

        .cov {
          margin-right: 20px;
          img {
            width: 130px;
            height: 130px;
          }
        }
        .detail {
          display: grid;
          gap: 4px;
          margin-right: 20px;
          .list_title {
            font-size: 18px;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            margin-bottom: 10px;
          }
          .introduce,
          .date_and_time,
          .human,
          .information {
            font-size: 14px;
            color: #333;
            span {
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
  .nav {
    position: fixed;
    bottom: 0;
    width: 1180px;
  }
  .nav,
  .nav-holder {
    background-color: white;
    padding: 30px 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;
    .nav-left,
    .nav-right {
      display: flex;
    }
    .nav-left {
      .select-all,
      .del {
        margin-right: 20px;
      }
    }
    .nav-right {
      .num,
      .total,
      .settlement {
        margin-right: 20px;
      }
    }
  }
}
</style>
