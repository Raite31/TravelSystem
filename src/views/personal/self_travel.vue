<template>
  <div class="contain-all-travel">
    <div class="list">
      <ul>
        <div v-for="item in orders" :key="item.index">
          <li>
            <div class="left">
              <div class="detail">
                <div class="list_title">
                  {{ item.title }} · {{ item.introduce }}
                </div>
                <div class="date_and_time">{{ item.date_and_time }}</div>
              </div>
            </div>
            <div class="right">
              <div class="message">
                {{ item.status }}
              </div>

              <div class="total" style="font-weight: bold">
                <span class="list_right_total">总额：</span
                >{{ item.human * item.price }}
              </div>

              <div class="list_right_button">
                <el-button @click="toDetail(item)">产品详情</el-button>
              </div>
            </div>
          </li>
          <hr/>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getOrder } from "@/api/personal";

export default {
  data() {
    return {
      show: "已完成",
      orders: {}
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
        path: `/destination/detail/?id=${item.attract_id}`
      });
    },
    showBar() {
      let oneHeight = this.$refs.scrollOne.getBoundingClientRect().top;
      if (oneHeight < 911) {
        //这是滑动到scrollTwo的距离要做的操作
        this.show = "已完成";
      } else {
        this.show = "已完成";
      }
    },
    getData(data) {
      getOrder({ id: this.user.id }).then((res) => {
        console.log("res: ", res);
        if (res.status == 200) {
          this.orders = res.data;
          this.$message({
            message: "数据加载成功！",
            type: "success"
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }

      });
    },
    initData() {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      this.getData()
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.contain-all-travel {
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
        justify-content: space-between;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;

        .left {
          align-self: flex-start;

          .detail {
            gap: 4px;
            margin-right: 20px;

            .list_title {
              font-size: 18px;
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
              "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              margin-bottom: 10px;
            }

            .date_and_time {
              font-size: 14px;
              color: #333;

              span {
                margin-right: 12px;
              }
            }
          }
        }

        .right {
          .message {
            margin-bottom: 10px;
          }

          .total {
            margin-bottom: 30px;

            .list_right_total {
              font-size: 14px;
              font-weight: 500;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
