<template lang="">
  <div>
    <Head></Head>
    <div class="contains">
      <image class="bg" :src="bgImage" />
    </div>
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
export default {
  components: {
    Head,
  },
  data() {
    return {
      bgImage: "http://localhost:8080/home_",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.contains {
  width: 1200px;
  height: 1900px;
}
</style>
