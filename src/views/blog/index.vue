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
              <img :src="require('@/assets/imgs/' + item.photo)" alt="" />
            </div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="tag">
                <span v-for="item in item.tags" :key="item.index">
                  {{ item }}
                </span>
              </div>
              <div class="list-contain">{{ item.contain }}</div>
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
import { getBlogPage } from "@/api/blog/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      blogs: null,
    };
  },
  methods: {
    getData() {
      getBlogPage().then((res) => {
        this.blogs = res.data;
      });
    },
  },

  created() {
    this.getData();
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

          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .tag {
          font-size: 16px;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 22px;
          margin-bottom: 12px;
        }
        .list-contain {
          width: 430px;
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          line-height: 22px;
          height: 200px;

          display: -webkit-box;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 9;

          // display: block;
          // overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
