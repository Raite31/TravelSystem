<template>
  <div>
    <Head></Head>
    <div class="search">
      <el-input></el-input>
      <el-button>出发！</el-button>
    </div>
    <div class="list"></div>
    <!-- 分页器 -->
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  components: {
    Head,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
