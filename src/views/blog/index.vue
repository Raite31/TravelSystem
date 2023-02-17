<template>
  <div>
    <Head />
    <div class="contain">
      你真好
      <div class="search"></div>
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
<style></style>
