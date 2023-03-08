<template>
  <div>
    <Head />
    <div class="contain_all">
      <div class="self">
        <div class="left">
          <img :src="require('@/assets/imgs/' + authors.avatar)" alt="" />
        </div>
        <div class="right">
          <div class="title">{{ authors.name }}</div>
          <div class="tag">
            <span v-for="item in authors.tags" :key="item.index">
              {{ item }}
            </span>
          </div>
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
              <div class="tag">
                <span v-for="item2 in item.tags" :key="item2.index">
                  {{ item2 }}
                </span>
              </div>
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
import { getAuthorBlog, getAuthor } from "@/api/author/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      authors: {},
      blogs: {},
    };
  },
  methods: {
    getData() {
      getAuthorBlog().then((res) => {
        this.blogs = res.data;
        console.log("this.blogs: ", this.blogs);
      });
      getAuthor().then((res) => {
        this.authors = res.data[0];
        console.log("this.authors: ", this.authors);
      });
    },
  },
  created() {
    this.getData();
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
