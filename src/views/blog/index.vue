<template>
  <div>
    <Head />
    <div class="contain">
      <div class="cover">
        <img src="@/assets/imgs/blog_cover.png" alt="" />
      </div>
      <div class="search"></div>
      <div class="title">博客分享集合地</div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in blogs" :key="index">
            <div class="left">
              <img :src="item.photo" alt="" />
            </div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="tag">{{ item.tags }}</div>
              <div class="contain">{{ item.contain }}</div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { test } from "@/api/destination/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      blogs: {
        0: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        1: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        2: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        3: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain:
            "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
        },
        4: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        5: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        6: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        7: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
        8: {
          photo: "@/assets/imgs/item_photo.png",
          title: "你好",
          tags: ["11111111", "222222222", "3333333"],
          contain: "dfasssssssssssguhdijvfbcdhnsjiygreuhdisjkvcbdhxsnj",
        },
      },
    };
  },
  methods: {},

  created() {
    test().then((info) => {
      console.log(info);
    });
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
.contain {
  width: 100%;
  margin: 0 auto;
  .cover {
    margin-bottom: 50px;
    img {
      width: 1500px;
      height: 592px;
    }
  }
  .title {
    margin-bottom: 70px;
    font-size: 42px;
    font-weight: 700;
    color: #1c1c1c;
    line-height: 57px;
  }
  ul {
    width: 900px;
    margin: 0 auto;
    li {
      display: flex;
      margin-bottom: 50px;
      .left {
        margin-right: 55px;
        img {
          width: 371px;
          height: 298px;
        }
      }
      .right {
        text-align: left;
        .title {
          font-size: 33px;
          font-weight: 400;
          color: #000000;
          line-height: 40px;
          margin-bottom: 12px;
        }
        .tag {
          font-size: 16px;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 22px;
          margin-bottom: 12px;
        }
        .contan {
          width: 430px;
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
