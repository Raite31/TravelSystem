<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="grid">
        <div class="left">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="describe">{{ describe }}</div>
          <div class="information">{{ information }}</div>
        </div>
        <div class="right">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="photo" style="margin-bottom: 20px">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="sell"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      photo: ["@/assets/imgs/item_photo.png"],
      describe:
        "The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? The occupational traffic permit is one things in the company How do you a commercial traffic permit for freight transport to your business? things in the company How do you a commercial traffic permit for freight transport to your business? ",
      information:
        "What's included Private Transport from and back to your Hotel in Marrakech by air-conditioned vehicle Guide Camel ride Lunch Tea What's not included Food and drinks, unless specified Highlights All taxes, fuel surcharges and service fees included A la carte lunch included All entrance fees included",
    };
  },
};
</script>

<style lang="scss">
.contain-all {
  width: 1200px;
  margin: 0 auto;
  .grid {
    display: grid;
    grid-template-columns: 60% 5fr;
    grid-template-rows: auto auto;
    column-gap: 2px;
    .left {
      .photo {
        margin-bottom: 20px;
        img {
          width: 660px;
          height: 406px;
          background-size: cover;
        }
      }
    }
    .right {
      .photo {
        img {
          width: 471px;
          height: 201px;
          background-size: cover;
        }
      }
      .sell {
        height: 580px;
        margin-left: 32px;
        align-self: flex-start;

        border: 1px solid #f1f1f1;
        border-radius: 12px;
        padding: 24px;
      }
    }
    //   .photo {
    //     margin-bottom: 30px;
    //     img {
    //       width: 100%;
    //       height: 410px;
    //     }
    //   }
    //   .bottom {
    //     display: flex;
    //     justify-content: space-between;
    //     .left {
    //       width: 60%;
    //     }
    //     .right {
    //       width: 37%;
    //
    //     }
    //   }
  }
}
</style>
