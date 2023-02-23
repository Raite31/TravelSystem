<template>
  <div>
    lalalal1
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
<style lang="scss"></style>
