<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="top-cov">
        <img src="" alt="" />
      </div>
      <div class="blog-contain">
        <div class="title">{{ form.title }}</div>
        <div class="information">
          <span class="name">{{ form.name }} · </span>
          <span class="createTime">
            {{ form.createTime }}
          </span>
          <div class="tags">
            <span class="tags-item" v-for="item in form.tags" :key="item.index">
              #{{ item }}
            </span>
          </div>
        </div>
        <div class="contain">{{ form.contain }}</div>
        <div class="author">
          <div class="text">关于我</div>
          <div class="author-information">
            <img src="" alt="" />
            <div class="right">
              <div class="name">{{ form.name }}</div>
              <div class="place">{{ form.place[1] }}</div>
              <div class="introduce">{{ form.introduce }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { getAuthor } from "@/api/author/index";
import { getBlogDetail } from "@/api/blog/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      user: null,
      form: {
        id: "",
        cov: "",
        title: "",
        name: "",
        createTime: "",
        tags: [],
        contain: "",
        avatar: "",
        place: "",
        introduce: "",
      },
      formRef: null,
    };
  },
  methods: {
    getData() {
      getBlogDetail({ id: 1 }).then((res) => {
        this.form.id = res.data[0].id;

        this.form.title = res.data[0].title;
        this.form.createTime = res.data[0].create_time;
        this.form.tags = res.data[0].tags;
        this.form.contain = res.data[0].contain;
      });
      getAuthor({ id: 1 }).then((res) => {
        this.form.avatar = res.data[0].avatar;
        this.form.name = res.data[0].name;
        this.form.place = res.data[0].place;
        this.form.introduce = res.data[0].introduce;
      });
    },
  },
  created() {
    this.getData();
    console.log("this.form: ", this.form);
  },
};
</script>
<style lang="scss" scoped>
.contain-all {
  width: 652px;
  margin: 0 auto;
  .top-cov {
  }
  .blog-contain {
    .title {
      font-size: 42px;
      font-family: Inter-Regular, Inter;
      font-weight: 400;
      color: #000000;
      line-height: 51px;
    }
    .information {
      .name {
        font-size: 16px;
        font-family: Open Sans-Regular, Open Sans;
        font-weight: 400;
        color: rgba(28, 28, 28, 0.5);
        line-height: 22px;
      }
      .createTime {
        font-size: 16px;
        font-family: Open Sans-Regular, Open Sans;
        font-weight: 400;
        color: rgba(28, 28, 28, 0.5);
        line-height: 22px;
      }
      .tags {
        .tags-item {
          font-size: 16px;
          font-family: Open Sans-Regular, Open Sans;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 22px;
        }
      }
    }
    .contain {
      text-align: left;
      font-size: 16px;
      font-family: Open Sans-Regular, Open Sans;
      font-weight: 400;
      color: #000000;
      line-height: 22px;

      margin-bottom: 70px;
    }
    .author {
      margin-bottom: 50px;
      padding: 10px;
      .text {
        text-align: left;
        font-size: 20px;
        font-family: Open Sans-Regular, Open Sans;
        font-weight: 400;
        color: rgba(28, 28, 28, 0.5);
        line-height: 27px;
      }
      .author-information {
        display: flex;
        img {
          width: 160px;
          height: 160px;
          background: #c4c4c4;
          opacity: 1;
          border-radius: 50%;

          margin-right: 37px;
        }
        .right {
          text-align: left;
          .name {
            font-size: 33px;
            font-family: Inter-Regular, Inter;
            font-weight: 400;
            color: #1c1c1c;
            line-height: 40px;
          }
          .place {
            font-size: 16px;
            font-family: Open Sans-Regular, Open Sans;
            font-weight: 400;
            color: rgba(28, 28, 28, 0.5);
            line-height: 22px;

            margin-bottom: 13px;
          }
          .introduce {
            font-size: 16px;
            font-family: Open Sans-Regular, Open Sans;
            font-weight: 400;
            color: #1c1c1c;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>
