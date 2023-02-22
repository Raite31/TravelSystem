<template>
  <div>
    <Head />
    <div class="contain-all">
      <div class="grid">
        <div class="left">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="information">
            <div class="title">{{ title }}</div>
            <div class="mechanism">{{ mechanism }}</div>
            <div class="recommend">{{ recommend }}</div>
            <div class="introduce">{{ introduce }}</div>
          </div>
          <hr />
          <div class="precautions">
            <ul v-for="item in precautions" :key="item.index">
              <li>{{ item.text }}</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="photo">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="photo" style="margin-bottom: 20px">
            <img src="@/assets/imgs/item_photo.png" alt="" />
          </div>
          <div class="sell">
            <div class="title"></div>
          </div>
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
      title: "The occupational traffic permit is one things in the company  ",
      mechanism: "By La Calypso Dive Center",
      recommend: "By La Calypso Dive Center",
      introduce:
        "What's included Private Transport from and back to your Hotel in Marrakech by air-conditioned vehicle Guide Camel ride Lunch Tea What's not included Food and drinks, unless specified Highlights All taxes, fuel surcharges and service fees included A la carte lunch included All entrance fees included",
      precautions: {
        0: { text: "Ages 15-65, max of 4 per group" },
        1: { text: "Ages 15-65, max of 4 per group" },
        2: { text: "Ages 15-65, max of 4 per group" },
        3: { text: "Ages 15-65, max of 4 per group" },
      },
    };
  },
};
</script>

<style lang="scss">
.contain-all {
  width: 1200px;
  margin: 0 auto;
  hr {
    width: 100%;
    margin: 48px auto;
    border: 0.1px solid #e4e3e3;
  }
  .grid {
    display: grid;
    grid-template-columns: 60% 5fr;
    grid-template-rows: auto auto;
    column-gap: 2px;
    .left {
      text-align: left;
      .photo {
        margin-bottom: 20px;
        img {
          width: 720px;
          height: 406px;
          background-size: cover;
        }
      }
      .information {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        .title {
          font-size: 28px;
          font-weight: bold;
          margin: 8px 0;
        }
        .mechanism {
          margin-bottom: 24px;
        }
        .recommend {
          margin-bottom: 24px;
        }
      }
      .precautions {
        ul {
          list-style: none;
        }
      }
    }
    .right {
      .photo {
        img {
          width: 472px;
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
  }
}
</style>
