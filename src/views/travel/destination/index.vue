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
          <li v-for="item in lists" :key="item.index" @click="toDetail(item)">
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
      user: null,
      lists: null,
    };
  },
  methods: {
    getdata() {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      getDestinationPage().then((res) => {
        this.lists = res.data;
      });
    },
    toDetail(item) {
      console.log("Data: ", item.id);
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
    this.getdata();
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
}
</style>
