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
          <li></li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Head,
    Footer,
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
  height: calc(100vh - 70px);
  margin: 0 auto;
  .cover {
    img {
      width: 1500px;
      height: 592px;
    }
  }
}
</style>
