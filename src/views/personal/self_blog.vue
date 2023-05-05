<template>
  <div class="contain-all-blog">

    <div class="list">
      <ul>
        <li v-for="item in articles" :key="item.index" @click="toDetail(item)">
          <div class="left">
            <img :src="item.photo[0]" alt="">
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduce }}</div>
            <span class="date">{{ item.create_time }}</span>
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
  </div>
</template>
<script>
import { getBlogPage } from "@/api/blog/index";

export default {
  data() {
    return {
      user: null,
      articles: null,
      currentPage4: 1,
      pageSize: 10,
      total: 0,
      pageTicket: [] // 分页后当前页数据
    };
  },
  methods: {
    // 跳转详情
    toDetail(item) {
      this.$router.push({
        // 方式一
        // name: "destinationDetail",
        // params: {
        //   id: item.id,
        // },

        // 方式二
        path: `/blogList/blogDetail/?id=${item.id}`
      });
    },
    // 切换分页
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.getPageInfo();
      window.scroll(0, 0);
    },
    onQuery(data) {
      this.getdata(data);
    },
    // 请求数据
    getData(data) {
      getBlogPage({ userId: data }).then((res) => {
        console.log("res: ", res);
        if (res.status == 200) {
          this.total = res.data.length;
          this.articles = res.data;
          this.getPageInfo();
          this.$message({
            message: "数据加载成功！",
            type: "success"
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      });
    },
    // 分页操作
    getPageInfo() {
      this.pageTicket = [];
      for (
          let i = (this.currentPage4 - 1) * this.pageSize;
          i < this.total;
          i++
      ) {
        this.pageTicket.push(this.articles[i]);
        if (this.pageTicket.length === this.pageSize) break;
      }
    },

    initData() {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      this.getData(this.user.id);
    }
  },
  created() {
    this.initData();
  }
};
</script>
<style lang="scss" scoped>
.contain-all-blog {
  background: white;

  .nav {
    border-bottom: 1px solid #f0f0f2;
  }

  .list {
    ul {
      list-style: none;
      text-align: left;

      li {
        padding: 24px 0;
        margin: 0 24px;
        border-bottom: 1px solid #f0f0f2;
        display: flex;

        img {
          width: 164px;
          height: 140px;
          margin-right: 16px;
        }

        .right {
          width: 600px;

          .title {
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            color: #222226;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            margin-bottom: 8px;
          }

          .introduction {
            font-size: 14px;
            color: #555666;
            line-height: 24px;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            margin-bottom: 16px;
          }

          .date {
            color: #555666;
            line-height: 20px;
            font-size: 14px;
            margin-right: 8px;
          }
        }

      }
    }
  }
}
</style>
