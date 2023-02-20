<template>
  <div>
    <Head />
    <div class="contain_all">
      <div class="self">
        <div class="left">
          <img :src="authors.avatar" alt="" />
        </div>
        <div class="right">
          <div class="title">{{ authors.name }}</div>
          <div class="tag">{{ authors.tags }}</div>
          <div class="introduce">{{ authors.introduce }}</div>
        </div>
      </div>
      <div class="banner"></div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in blogs" :key="index">
            <div class="left">
              <img :src="item.cov" alt="" />
            </div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="tag">{{ item.tags }}</div>
              <div class="contain">{{ item.contain }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
      authors: {
        avatar: "@/assets/imgs/item_photo.png",
        name: "姓名",
        tags: ["11111111", "222222222", "3333333"],
        introduce:
          "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介v",
      },
      blogs: {
        0: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        1: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        2: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        3: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        4: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        5: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        6: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        7: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        8: {
          cov: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.contain_all {
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .self {
    width: 600px;
    display: flex;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 80px;
    text-align: left;
    .left {
      margin-right: 75px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50px;
      }
    }
    .right {
      .title {
        font-size: 42px;
        font-family: Inter-Regular, Inter;
        font-weight: 400;
        color: #1c1c1c;
        line-height: 51px;
      }
      .tag {
        font-size: 16px;
        font-family: Open Sans-Regular, Open Sans;
        font-weight: 400;
        color: rgba(28, 28, 28, 0.5);
        line-height: 22px;
        margin-bottom: 8px;
      }
      .introduce {
        font-size: 16px;
        font-family: Open Sans-Regular, Open Sans;
        font-weight: 400;
        color: rgba(28, 28, 28, 0.5);
        line-height: 22px;
      }
    }
  }
  .list {
    ul {
      width: 900px;
      list-style: none;
      margin: 0 auto;
      li {
        display: flex;
        margin-bottom: 65px;
        text-align: left;
        .left {
          margin-right: 37px;
          img {
            width: 237px;
            height: 177px;
          }
        }
        .right {
          .title {
            font-size: 33px;
            font-family: Inter-Regular, Inter;
            font-weight: 400;
            color: #000000;
            line-height: 40px;
            margin-bottom: 3px;
          }
          .tag {
            font-size: 16px;
            font-family: Open Sans-Regular, Open Sans;
            font-weight: 400;
            color: rgba(28, 28, 28, 0.5);
            line-height: 22px;
            margin-bottom: 10px;
          }
          .contain {
            font-size: 16px;
            font-family: Open Sans-Regular, Open Sans;
            font-weight: 400;
            color: #000000;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>
