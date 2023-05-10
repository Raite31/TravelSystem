<template>
  <div class="contain-all">
    <div class="bottom">
      <div class="left">
        <div class="text1">想要获得独特的优惠？</div>
        <div class="text2">在 TELEGRAM 中订阅我们的频道</div>
        <el-button
          type="primary"
          style="
            background-color: rgba(241, 229, 97);
            border: rgba(241, 229, 97, 0.6);
          "
          >点击这里</el-button
        >
      </div>
      <ul>
        <li class="title">服务</li>
        <li>航班</li>
        <li>保险</li>
        <li>签证</li>
      </ul>
      <ul>
        <li class="title">信息</li>
        <li>如何购买？</li>
        <li>关于我们</li>
        <li>点评</li>
      </ul>
      <ul>
        <li class="title">联系人</li>
        <li>+38(095) 179 79 79</li>
        <li>+38(067) 667 79 79</li>
        <li>info@magic rest.com.UA</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom {
  padding: 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  color: #aba6a6;

  background-image: url("@/assets/imgs/footer.png");
  background-size: cover;
  .left {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .text1 {
      font-size: 35px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      line-height: 53px;
    }
    .text2 {
      font-size: 18px;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500;
      line-height: 27px;
    }
    .el-button {
      width: 193px;
      height: 36px;
      border-radius: 30px 30px 30px 30px;
    }
  }

  ul {
    list-style: none;
    .title {
      font-size: 15px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #d6d6d6;
      line-height: 23px;
    }
    li {
      margin-bottom: 50px;
    }
  }
}
</style>
