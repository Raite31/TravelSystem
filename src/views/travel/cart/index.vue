<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="contain-top">
        <h1 class="title">购物车</h1>
        <div class="link">
          <router-link
            :to="{ path: '/personal', query: { tag_flag: '全部订单' } }"
            >查看所有订单</router-link
          >
        </div>
      </div>

      <div class="list">
        <ul>
          <div v-for="item in orders" :key="item.index">
            <li>
              <div class="cov">
                <img :src="item.cov[0]" alt="" />
              </div>
              <div class="detail">
                <div class="list_title">{{ item.title }}</div>
                <div class="introduce">{{ item.introduce }}</div>
                <div class="date_and_time">{{ item.date_time }}</div>
                <div>
                  <span class="human">
                    {{
                      Number(item.adults_num) +
                      Number(item.children_num) +
                      Number(item.infants_num)
                    }}
                    Adults x
                    <span style="font-weight: bold">RMB{{ item.price }}</span>
                  </span>
                  <span class="total" style="font-weight: bold">
                    {{
                      (Number(item.adults_num) +
                        Number(item.children_num) +
                        Number(item.infants_num)) *
                      item.price
                    }}
                  </span>
                </div>
                <div class="information">
                  <span v-for="item2 in item.information" :key="item2.index">
                    {{ item2 }}
                  </span>
                </div>
              </div>
              <div class="checkbox">
                <input
                  type="checkbox"
                  v-model="item.status"
                  @input="change(item)"
                  @change="selectItem(item)"
                />
              </div>
            </li>

            <hr />
          </div>
        </ul>
      </div>

      <div class="nav-all">
        <div class="nav-holder" ref="scrollOne">
          <div class="nav-left">
            <div class="select-all">
              <input type="checkbox" name="selectAll" />
              <label for="selectAll">全选</label>
            </div>
            <button class="del">删除</button>
          </div>
          <div class="nav-right">
            <div class="num">已选 {{ num }} 个去向</div>
            <div class="total">总价：{{ sumPrice }}</div>
            <button class="settlement" @click="settlement()">结算</button>
          </div>
        </div>

        <div class="nav" ref="listheight" v-if="show && orders.length > 3">
          <div class="nav-left">
            <div class="select-all">
              <input type="checkbox" name="selectAll" />
              <label for="selectAll">全选</label>
            </div>
            <button class="del">删除</button>
          </div>
          <div class="nav-right">
            <div class="num">已选 {{ num }} 个去向</div>
            <div class="total">总价：{{ sumPrice }}</div>
            <button class="settlement" @click="settlement()">结算</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { getCartList, delCart } from "@/api/cart/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      user: null,
      show: true,
      orders: {},
      settlementList: [],
      selectList: [],
      num: 0,
      sumPrice: 0,
    };
  },
  methods: {
    // 勾选时候触发
    selectItem(data) {
      console.log("Data:", data);
      if (data.status == true) {
        this.selectList.push(data);
        this.num += 1;
        this.sumPrice += data.price;
      } else {
        this.selectList.pop(data);
        this.num -= 1;
        this.sumPrice -= data.price;
      }
    },
    change(data) {
      if (data.status == null) {
        this.settlementList.push(data.id);
      } else {
        this.settlementList.pop(data.id);
      }
    },
    settlement() {
      if (this.settlementList.length == 0) {
        this.$message({
          message: "请选择要结算的商品",
          type: "error",
        });
        return;
      }
      let data = {
        uid: this.user.id,
        id: this.settlementList,
      };
      delCart(data).then((res) => {
        if (res.data.code == 200) {
          this.$message({
            message: "结算成功",
            type: "success",
          });
          this.getData();
          this.settlementList = [];
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      });
    },
    showBar() {
      let oneHeight = this.$refs.scrollOne.getBoundingClientRect().top;
      if (oneHeight < 911) {
        //这是滑动到scrollTwo的距离要做的操作
        this.show = false;
      } else {
        this.show = true;
      }
    },
    getData() {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      getCartList({ id: this.user.id }).then((res) => {
        this.orders = res.data;
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showBar);
    this.getData();
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
.contain-all {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: left;
  hr {
    width: 100%;
    margin: 24px auto;
    border: 0.1px solid #e4e3e3;
  }
  // 列表头部
  .contain-top {
    width: 1200px;
    margin: 0 auto;
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
  }
  // item列表
  .list {
    width: 1200px;
    margin: 0 auto;
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
  // "导航栏"
  .nav-all {
    display: flex;
    justify-content: center;
    .nav,
    .nav-holder {
      width: 1200px;
      background-color: white;
      padding: 30px 0px;
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
        .total {
          margin-right: 20px;
        }
        .total {
          font-weight: 600;
        }
      }
    }
    .nav {
      position: fixed;
      bottom: 0;
    }
  }
}
</style>
