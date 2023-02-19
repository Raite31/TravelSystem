<template>
  <div>
    <Head />
    <div class="contain">
      <div class="self">
        <div class="left">
          <img :src="authors.avatar" alt="" />
        </div>
        <div class="right">
          <div class="title">{{ authors.name }}</div>
          <div class="tag">{{ authors.tags }}</div>
          <div class="contain">{{ authors.introduce }}</div>
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
<style lang="scss">
.contain {
  .list {
    ul {
      list-style: none;
    }
  }
}
</style>
