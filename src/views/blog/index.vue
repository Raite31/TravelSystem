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
          <li
            v-for="(item, index) in pageTicket"
            :key="index"
            @click="toDetail(item)"
          >
            <div class="left">
              <img :src="item.photo[0]" alt="" />
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

      <div class="block">
        <el-pagination
          :hide-on-single-page="true"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
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
      currentPage4: 1,
      pageSize: 10,
      total: 0,
      pageTicket: [], // 分页后当前页数据
    };
  },
  methods: {
    // 切换分页
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.getPageInfo();
      window.scroll(0, 0);
    },
    // 分页操作
    getPageInfo() {
      this.pageTicket = [];
      for (
        let i = (this.currentPage4 - 1) * this.pageSize;
        i < this.total;
        i++
      ) {
        this.pageTicket.push(this.blogs[i]);
        if (this.pageTicket.length === this.pageSize) break;
      }
    },
    getData() {
      getBlogPage().then((res) => {
        if (res.data.length) {
          this.total = res.data.length;
          this.blogs = res.data;
          this.getPageInfo();
          this.$message({
            message: "数据加载成功！",
            type: "success",
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "error",
          });
        }
      });
    },
    toDetail(item) {
      this.$router.push({
        // 方式一
        // name: "destinationDetail",
        // params: {
        //   id: item.id,
        // },

        // 方式二
        path: `/blogList/blogDetail/?id=${item.id}`,
      });
    },
  },

  created() {
    this.getData();
  },
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

.contain {
  width: 100%;
  margin: 0 auto;

  .cover {
    margin-bottom: 50px;
    border-radius: 10px;

    img {
      width: 1500px;
      height: 592px;
      border-radius: 10px;
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
      width: 900px;
      display: flex;
      margin-bottom: 50px;
      padding: 20px;
      background: rgba(252, 250, 229, 0.7);
      border-radius: 10px;
      transition: all 0.5s;

      .left {
        margin-right: 55px;

        img {
          width: 150px;
          height: 150px;
          border-radius: 10px;
        }
      }

      .right {
        text-align: left;

        .title {
          width: 600px;
          font-size: 24px;
          font-weight: 400;
          color: #000000;
          line-height: 40px;
          margin-bottom: 12px;

          // display: block;
          // overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;

          display: -webkit-box;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }

        .tag {
          font-size: 16px;
          font-weight: 400;
          color: rgba(28, 28, 28, 0.5);
          line-height: 22px;
          margin-bottom: 12px;
        }

        .list-contain {
          width: 680px;
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          line-height: 22px;

          display: -webkit-box;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;

          // display: block;
          // overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;
        }
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .block {
    margin: 50px auto;
  }
}
</style>
