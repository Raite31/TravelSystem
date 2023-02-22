<template>
  <div>
    <Head />
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
              <div class="views">
                {{ item.views }}
              </div>
              <div class="commits">
                {{ item.commits }}
              </div>
              <div class="introduction">{{ item.introduction }}</div>
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
export default {
  components: {
    Head,
    Footer,
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
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}
body {
  background-color: #f1f1f1;
}
.contains {
  width: 100%;
  margin: 0 auto;
  .search {
    height: 130px;
    background-color: white;
    display: flex;
    align-items: center;
    padding-left: 320px;
    margin-bottom: 30px;
    .el-input {
      width: 550px;
      margin-right: 60px;
      border: none;
      .el-input__inner {
        border: none;
      }
    }
    .el-button {
      width: 205px;
      height: 45px;
      border-radius: 30px;
      background-color: #004f32;
      color: white;
      font-weight: 600;
      &:hover {
        background-color: #00aa6c;
      }
    }
  }
  .list {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-left: 280px;
      li {
        display: flex;
        width: 918px;
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
          width: 600px;
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
