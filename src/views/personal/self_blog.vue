<template>
  <div class="contain-all">
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
        <li v-for="item in 10" :key="item.index">
          <div>{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.contain-all {
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
      }
    }
  }
}
</style>
