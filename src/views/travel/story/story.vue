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
      <div class="traveler_stories">
        <div class="title">旅行故事</div>
        <div class="items">
          <div class="item" v-for="item in 3" :key="item.index">
            <img src="@/assets/imgs/home_travel.png" alt="" />
            <div class="describe">
              Exploring Utah's National Parks with my non-outdoorsy tweens
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="red_revolution">
        <div class="title">4个必去的红色旅游景点</div>
        <div class="items">
          <div class="item" v-for="item in 4" :key="item.index">
            <img src="@/assets/imgs/home_travel.png" alt="" />
            <div class="describe">
              Exploring Utah's National Parks with my non-outdoorsy tweens
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="theme_Q">
        <div class="city_escapes">
          <div class="title">City_escapes</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="destination_experiences">
          <div class="title">Destination_experiences</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="eat_drink">
          <div class="title">Eat_drink</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="stay">
          <div class="title">Stay</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="culture_history">
          <div class="title">Culture_history</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="travel_style">
          <div class="title">Travel_style</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
          </div>
        </div>
        <div class="related">
          <div class="title">Related</div>
          <div class="items">
            <div class="item" v-for="item in 3" :key="item.index">
              <img src="@/assets/imgs/home_travel.png" alt="" />
              <div class="describe">
                Exploring Utah's National Parks with my non-outdoorsy tweens
              </div>
            </div>
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
    return {};
  },
};
</script>
<style lang="scss">
.contains_all {
  width: 1200px;
  margin: 100px auto;
  hr {
    width: 65%;
    margin: 48px auto;
    border: 0.1px solid #e4e3e3;
  }
  .guide {
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
  .traveler_stories {
    .title {
      font-size: 45px;
      font-weight: 900;
      margin: 90px 0;
      text-align: left;
      margin-left: 20px;
    }
    .items {
      display: flex;
      .item {
        img {
          width: 365px;
          height: 230px;
          margin-bottom: 24px;
        }
        .describe {
          width: 85%;
          margin: 0 auto;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 18px;
          font-weight: 900;
        }
      }
    }
  }
  .red_revolution {
    margin-bottom: 100px;
    .title {
      font-size: 45px;
      font-weight: 900;
      margin: 90px 0;
      text-align: left;
      margin-left: 20px;
    }
    .items {
      display: flex;
      .item {
        img {
          width: 365px;
          height: 230px;
          margin-bottom: 24px;
        }
        .describe {
          width: 85%;
          margin: 0 auto;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 18px;
          font-weight: 900;
        }
      }
    }
  }
  .theme_Q {
    .city_escapes,
    .destination_experiences,
    .eat_drink,
    .stay,
    .culture_history,
    .travel_style,
    .related {
      margin-bottom: 100px;
      .title {
        font-size: 45px;
        font-weight: 900;
        margin: 65px 0;
        text-align: left;
        margin-left: 20px;
      }
      .items {
        display: flex;
        .item {
          img {
            width: 365px;
            height: 230px;
            margin-bottom: 24px;
          }
          .describe {
            width: 85%;
            margin: 0 auto;
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            font-size: 18px;
            font-weight: 900;
          }
        }
      }
    }
  }
}
</style>
