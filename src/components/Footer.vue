<template>
  <div class="contain-all">
    <img src="@/assets/imgs/footer.png" />
    <div class="bottom">
      <img src="@/assets/imgs/luori.png" alt="" />
      <ul>
        <li class="title">11111111111111111</li>
        <li>22222222222222222</li>
        <li>33333333333333333</li>
        <li>44444444444444444</li>
      </ul>
      <ul>
        <li class="title">11111111111111111</li>
        <li>22222222222222222</li>
        <li>33333333333333333</li>
        <li>44444444444444444</li>
      </ul>
      <ul>
        <li class="title">11111111111111111</li>
        <li>22222222222222222</li>
        <li>33333333333333333</li>
        <li>44444444444444444</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 1887px;
  background: #0522a0;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}

.bottom {
  width: 1887px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  img {
    width: 114px;
    height: 114px;
    margin: 81px 0 0 81px;
  }
  ul {
    width: 300px;
    list-style: none;
    margin-top: 90px;
    .title {
      font-size: 15px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #000000;
      line-height: 23px;
    }
    li {
      margin-bottom: 50px;
    }
  }
}
</style>
