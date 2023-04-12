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
                <el-button>产品详情</el-button>
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
export default {
  data() {
    return {
      show: "已完成",
      orders: {
        0: {
          title: "【桃花节预订】西藏林芝5日游 观景酒店·无人机航拍·布宫旅拍 西藏林芝+来古冰川+巴松措+雅鲁藏布大峡谷+然乌湖+林芝波密+西藏拉萨出发",
          introduce:
              "如果来林芝只为赏桃花那就太辜负雪域春天的美誉了冰川、雪山、碧水、繁星、野花作伴才构成了这幅独一无二的春日美卷",
          date_and_time: "2021.05.25",
          human: 4,
          price: 2780,
          information: [
            "Duration: 2h",
            "Instant Confirmation",
            "Mobile Ticket Accepted",
            "Free cancellation before March 8"
          ],
          status: "待出发"
        },
        1: {
          title: "三亚亚龙湾热带天堂森林公园门票 可选网红玻璃海景栈道·索桥·丛林飞跃·雨林飞漂项目 亲子玩乐",
          introduce:
              "三亚亚龙湾爱立方户外潜水一日游\n" +
              "亚龙湾爱立方\n" +
              "海水之上是蓝天碧海银滩的美妙\n" +
              "马蜂窝自营\n" +
              "国 马蜂窝管家\n" +
              "4006345678周一至周日 09:(\n" +
              "海水之下是珊瑚鱼群的缤纷风情\n" +
              "-头扎进去海底\n" +
              "去逗一逗礁石里藏着的小鱼",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 1207,
          information: [
            "玩转水上项目",
            "潜水好去处",
            "踏水戏沙",
            "纯玩0购"
          ],
          status: "待出发"
        },
        2: {
          title: "2-5人团川西纯玩可选空座率·九寨沟+毕棚沟+达古冰川+黄龙4日游 赠成都住宿接机+一价全含+体验旅拍+特色餐食+九寨连住2晚+口碑精品团",
          introduce:
              "如果你还没去过九寨沟，那就趁现在吧!“睛看水，阴看山，半睛半阴看云烟”。不管什么天气，你在九寨都不会失望。这也许是你可以看到较低海拔的人间仙境了。",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 1069,
          information: [
            "10h玩九寨",
            "宿2晚九寨沟口",
            "可选空座率套餐",
            "赠成都精品酒店"
          ],
          status: "已完成"
        },
        3: {
          title: "网红打卡·三亚亚特兰蒂斯酒店1-4晚多套餐可选 游艇出海3小时 水世界水族馆无限次畅玩 自助早餐 旅拍写真 迷你吧 拼车接送机 亲子 酒店",
          introduce:
              "走进三亚·亚特兰蒂斯\n" +
              "站式旅游综合度假目的地",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 2388,
          information: [
            "水上乐园世界",
            "探索海底世界",
            "网红打卡圣地"
          ],
          status: "已完成"
        },
        4: {
          title: "达古冰川+毕棚沟纯玩2日游 可选8人团·景区精修旅拍 四川达古冰川/毕棚沟/四川成都（毕棚沟错峰出游 达古冰川旅游 四川成都出发）",
          introduce:
              "产品经理说\n" +
              "场完整的玩雪之旅绝不止达古冰川+毕棚沟还应该有冰川写真、特色美食\n" +
              "这一趟才值得!",
          date_and_time: "Thursday, March 9, 2023 | 10:00 AM",
          human: 4,
          price: 298,
          information: [
            "三环接",
            "赠氧气",
            "赠特色餐",
            "网红咖啡馆"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
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
            "Free cancellation before March 8"
          ],
          status: "已完成"
        }
      }
    };
  },
  methods: {
    showBar() {
      let oneHeight = this.$refs.scrollOne.getBoundingClientRect().top;
      if (oneHeight < 911) {
        //这是滑动到scrollTwo的距离要做的操作
        this.show = "已完成";
      } else {
        this.show = "已完成";
      }
    }
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
