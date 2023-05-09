<template>
  <div>
    <Head />
    <div class="contains">
      <div class="search">
        <el-input
          placeholder="去哪儿？"
          v-model="searchKeyword"
          prefix-icon="el-icon-search"
          @keyup.enter.native="searchDestination(searchKeyword)"
        ></el-input>
        <el-button>出发！</el-button>
      </div>
      <div class="list">
        <ul>
          <li
            v-for="item in pageTicket"
            :key="item.index"
            @click="toDetail(item)"
          >
            <img :src="item.photo[0]" />
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <span class="views">
                {{ item.view }}
              </span>
              <span class="comment">
                {{ item.comm_num }}
              </span>
              <div class="introduction">{{ item.introduce }}</div>
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
import { getDestinationPage } from "@/api/destination/index";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      lists: null,
      keyword: this.$route.query.keyword,
      currentPage4: 1,
      pageSize: 10,
      total: 0,
      pageTicket: [], // 分页后当前页数据
      searchKeyword: null,
    };
  },
  methods: {
    searchDestination(data) {
      this.getdata(this.searchKeyword);
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
    getdata(data) {
      getDestinationPage({ keyword: data }).then((res) => {
        if (res.data.length) {
          this.total = res.data.length;
          this.lists = res.data;
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
    // 分页操作
    getPageInfo() {
      this.pageTicket = [];
      for (
        let i = (this.currentPage4 - 1) * this.pageSize;
        i < this.total;
        i++
      ) {
        this.pageTicket.push(this.lists[i]);
        if (this.pageTicket.length === this.pageSize) break;
      }
    },
    toDetail(item) {
      this.$router.push({
        // 方式一
        // name: "destinationDetail",
        // params: {
        //   id: item.id,
        // },

        // 方式二
        path: `/destination/detail/?id=${item.id}`,
      });
    },
  },
  created() {
    if (this.keyword) {
      console.log(this.keyword);
      this.onQuery(this.keyword);
    } else {
      this.getdata();
    }
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
        background-color: rgb(237, 241, 252);
        padding: 20px 100px 20px 30px;
        box-sizing: border-box;
        text-align: left;

        border-radius: 10px;

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

          .views-and-comment {
            margin-bottom: 50px;
          }

          .introduction {
            font-size: 14px;

            display: -webkit-box;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
          }
        }
      }
    }
  }

  .block {
    margin: 50px auto;
  }
}
</style>
