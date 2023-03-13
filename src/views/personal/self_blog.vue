<template>
  <div class="contain-all-blog">
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">消息中心</el-menu-item>
        <el-menu-item index="5">消息中心</el-menu-item>
        <el-menu-item index="6">消息中心</el-menu-item>
        <el-menu-item index="7">消息中心</el-menu-item>
      </el-menu>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in articles" :key="item.index">
          <div class="title">{{ item.title }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <span class="date">{{ item.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: {
        0: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
        1: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
        2: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
        3: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
        4: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
        5: {
          title: "数据结构",
          introduction: "11111111111111111111111111111",
          date: "2022.12.23",
        },
      },
    };
  },
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
</style>
