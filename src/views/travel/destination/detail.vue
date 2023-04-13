<template>
  <div>
    <Head/>
    <div class="contain-all">
      <div class="grid">
        <div class="left">
          <div class="photo">
            <img :src="list.photo[0]" alt=""/>
          </div>
          <div class="information">
            <div class="title">{{ list.title }}</div>
            <div>
              <span class="view">{{ list.view }}</span>
              <span class="comment">{{ list.comment }}</span>
            </div>
            <div class="introduce">{{ list.introduce }}</div>
          </div>
          <hr/>
          <div class="precautions">
            <ul>
              <li v-for="item in list.precautions" :key="item.index">
                {{ item }}
              </li>
            </ul>
          </div>
          <hr/>
          <div class="illustrate">
            <div class="include">
              <div class="title">包括什么</div>
              <ul>
                <li v-for="item in list.tags">
                  {{ item }}
                </li>
              </ul>
            </div>
            <hr/>
            <div class="expect">
              <div class="title">期待什么</div>
              <div></div>
            </div>
            <hr/>
            <div class="go">
              <div class="title">出发和返回</div>
              <ul>
                <li v-for="item in list.departure_and_return">
                  {{ item }}
                </li>
              </ul>
            </div>
            <hr/>
            <div class="accessibility">
              <div class="title">辅助功能</div>
              <ul>
                <li v-for="item in list.accessibility">
                  {{ item }}
                </li>
              </ul>
            </div>
            <hr/>
            <div class="additional_information">
              <div class="title">附加信息</div>
              <ul>
                <li v-for="item in list.addn_info">
                  {{ item }}
                </li>
              </ul>
            </div>
            <hr/>
            <div class="cancel">
              <div class="title">取消政策</div>
              <div>
                {{ list.cancellation_policy }}
              </div>
            </div>
            <hr/>
            <div class="question">
              <div class="title">常见问题</div>
              <div></div>
            </div>
            <hr/>
            <div class="help">
              <div class="title">帮助</div>
              <div>{{ list.help }}</div>
            </div>
            <hr/>
          </div>
        </div>
        <div class="right">
          <div class="photo">
            <img :src="list.photo[1]" alt=""/>
          </div>
          <div class="photo" style="margin-bottom: 20px">
            <img :src="list.photo[2]" alt=""/>
          </div>
          <div class="sell">
            <div class="title">预留你的位置</div>
            <div class="date_num">
              <div class="date_num_show">
                <el-date-picker
                    placeholder="请选择日期"
                    v-model="list.date_time"
                ></el-date-picker>
                <div class="num">
                  <img
                      src="@/assets/default/people.svg"
                      alt=""
                      @click="dialogVisible = true"
                  />
                  <span class="people">
                    {{
                      Number(list.adults_num) +
                      Number(list.children_num) +
                      Number(list.infants_num)
                    }}
                  </span>
                </div>
              </div>
              <el-dialog
                  title="选择人数"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :append-to-body="true"
              >
                <div
                    class="item"
                    style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                  "
                >
                  <div class="left">
                    <div>成人</div>
                    <div>年龄：13-100</div>
                  </div>
                  <div class="right">
                    <el-input
                        type="number"
                        v-model="list.adults_num"
                    ></el-input>
                  </div>
                </div>
                <div
                    class="item"
                    style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                  "
                >
                  <div class="left">
                    <div>儿童</div>
                    <div>年龄：6-12</div>
                  </div>
                  <div class="right">
                    <el-input
                        type="number"
                        v-model="list.children_num"
                    ></el-input>
                  </div>
                </div>
                <div
                    class="item"
                    style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                  "
                >
                  <div class="left">
                    <div>婴儿</div>
                    <div>年龄：0-5</div>
                  </div>
                  <div class="right">
                    <el-input
                        type="number"
                        v-model="list.infants_num"
                    ></el-input>
                  </div>
                </div>
                <el-button></el-button>
              </el-dialog>
            </div>
            <!-- <p class="tip3">一个预约可用于{{ date }}</p> -->
            <div class="information">
              <div class="title">{{ list.title }}</div>
              <div class="image"></div>
              <div class="tip4">立即预定并稍后付款符合条件</div>
              <div class="computed">
                {{
                  Number(list.adults_num) +
                  Number(list.children_num) +
                  Number(list.infants_num)
                }}人 x ￥{{ list.price }}
              </div>
              <div class="total">
                Total ￥{{
                  (Number(list.adults_num) +
                      Number(list.children_num) +
                      Number(list.infants_num)) *
                  list.price
                }}
              </div>
              <div class="tip">(无额外税费或预定费)</div>
              <el-button class="time">{{ list.time }}</el-button>
            </div>
            <div class="precautions">
              立即预订并稍后付款符合条件 -
              不确定您的计划？您可以预订一个位置并稍后付款。只需点击“立即预订”即可查看更多付款选项。
            </div>
            <div class="button">
              <el-button class="add_to_cart" @click="createOrder(list)">
                添加到购物车
              </el-button>
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
          <hr/>
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
      <Footer/>
    </div>

  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { getDestinationDetail } from "@/api/destination/index";
import { addCart } from "@/api/cart/index";

export default {
  components: {
    Head,
    Footer
  },
  data() {
    return {
      dialogVisible: false,
      // 获取跳转的id
      // 方式一
      // id: this.$route.params.id
      // 方式二
      id: this.$route.query.id,

      list: {
        adults_num: 0,
        children_num: 0,
        infants_num: 0,
        date_time: null,
        photo: []
      }
    };
  },
  methods: {
    getData() {
      getDestinationDetail({ id: this.id }).then((res) => {
        this.list = Object.assign(this.list, res.data[0]);
      });
    },
    createOrder(data) {
      if (data.adults_num == 0 && data.children_num == 0 && data.infants_num == 0) {
        this.$message.error("请先选择游客");
      } else {
        addCart(data).then((res) => {
          this.$message.success("添加购物车成功");
        });
      }

    }
  },
  created() {
    this.getData();
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
}

.contain-all {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;

  hr {
    width: 100%;
    margin: 24px auto;
    border: 0.1px solid #e4e3e3;
  }

  .grid {
    width: 1200px;
    margin: 0 auto;
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

        ul {
          margin-left: 20px;
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

        .date_num {
          margin-bottom: 20px;

          .date_num_show {
            display: flex;
            align-items: center;

            .el-date-editor {
              margin-right: 20px;
            }

            .num {
              display: flex;
              justify-content: center;
              align-items: center;

              img {
                margin-right: 3px;
              }

              .people {
                font-weight: 600;
              }
            }
          }
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
    width: 1200px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>
