<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="item in articles" :key="item.index"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
