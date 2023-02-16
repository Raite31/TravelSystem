<template>
  <div>
    <Head></Head>
    <div class="contains">
      <div class="search">
        <el-input></el-input>
        <el-button>出发！</el-button>
      </div>
      <div class="list">
        <ul>
          <li v-for="item in lists" :key="item.title">
            <img :src="item.cov" />
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="views-and-commits">
                {{ item.views }} and {{ item.commits }}
              </div>
              <div class="introduction">{{ item.introduction }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  components: {
    Head,
  },
  data() {
    return {
      lists: {
        0: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        1: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        2: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        3: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        4: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        5: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        6: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        7: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
        8: {
          cov: "@/assets/imgs/item_photo.png",
          title: "China",
          views: "2222",
          commits: "12123",
          introduction:
            "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        },
      },
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #f1f1f1;
}
.contains {
  .list {
    ul {
      list-style: none;
      li {
        display: flex;
        margin-bottom: 10px;
        background-color: white;
        padding: 20px 100px 20px 30px;
        box-sizing: border-box;
        text-align: left;
        img {
          width: 164px;
          height: 140px;
          margin-right: 16px;
        }
        .right {
          .title {
            font-size: 20px;
            font-weight: 600;
          }
          .views-and-commits {
            margin-bottom: 50px;
          }
          .introduction {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
