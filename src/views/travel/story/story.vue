<template>
  <div>
    <Head />
    <div class="contains_all">
      <div class="guide">
        <div class="part-one">
          <div class="title">指导：红色旅游</div>
          <div class="image">
            <img src="@/assets/imgs/home_travel.png" alt="" />
          </div>
          <div class="describe">
            We’re celebrating Black History Month by recognizing our Black
            community's contributions 365 days a year. With this in mind, we’ve
            launched this go-to resource, where you'll find our best travel recs
            and stories all in one place—for February and beyond. Discover
            Black-owned spots to eat, stay, and shop, plus follow some of our
            favorite guides on their journeys around the world (itineraries
            included!).
          </div>
        </div>
        <hr />
        <div class="part-two">
          <div class="image">
            <img src="@/assets/imgs/home_travel.png" alt="" />
          </div>
          <div class="describe">
            R&B and hip hop, jazz and house, these fests are pulling out all the
            stops for 2023. Get blown away by the music and pack in a great
            vacation, too.
          </div>
        </div>
        <hr />
      </div>
      <div class="traveler_stories"></div>
      <div class="red_revolution"></div>
      <div class="theme_Q">
        <div class="city_escapes"></div>
        <div class="destination_experiences"></div>
        <div class="eat_drink"></div>
        <div class="stay"></div>
        <div class="culture_history"></div>
        <div class="travel_style"></div>
        <div class="related"></div>
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
    return {};
  },
};
</script>
<style lang="scss">
.contains_all {
  width: 1200px;
  margin: 100px auto;
  .guide {
    hr {
      width: 65%;
      margin: 48px auto;
      border: 0.1px solid #e4e3e3;
    }
    margin: 0 auto;
    .part-one {
      .title {
        font-size: 45px;
        font-weight: 900;
        margin: 32px 0 24px 0;
      }
      .image {
        margin: 32px 0;
        img {
          width: 1136px;
          height: 456px;
          border-radius: 30px;
        }
      }
      .describe {
        margin: 0 auto;
        margin-bottom: 48px;
        width: 65%;
        text-align: left;
        font-size: 23px;
        font-family: "Times New Roman", Times, serif;
      }
    }
    .part-two {
      .image {
        img {
          width: 1136px;
          height: 456px;
          border-radius: 30px;
        }
      }
      .describe {
        width: 65%;
        margin: 0 auto;
        text-align: left;
        font-size: 24px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-weight: 900;
      }
    }
  }
}
</style>
