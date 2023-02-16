import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/login/index.vue"),
  },

  // 主页
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/travel/home/index.vue"),
  },
  {
    path: "/strategy",
    name: "strategy",
    component: () => import("@/views/blog/strategy/Strategy.vue"),
  },
  {
    path: "/diary",
    name: "diary",
    component: () => import("@/views/blog/diary/Diary.vue"),
  },
  {
    path: "/destination",
    name: "destination",
    component: () => import("@/views/travel/destination/Destination.vue"),
  },
  {
    path: "/diaryContent",
    name: "diaryContent",
    component: () => import("@/views/blog/diary/DiaryContent.vue"),
  },
  {
    path: "/pushDiary",
    name: "pushDiary",
    component: () => import("@/views/blog/diary/PushDiary.vue"),
  },
  {
    path: "/statistics",
    name: "statistics",
    redirect: "/diary_statistics",
    component: () => import("@/views/statistics/Index.vue"),
    // 二级路由
    children: [
      {
        path: "/diary_statistics",
        name: "diary_statistics",
        component: () => import("../views/statistics/Diary_Statistics.vue"),
      },
      {
        path: "/epidemic",
        name: "epidemic",
        component: () => import("../views/statistics/epidemic/Epidemic.vue"),
      },
      {
        path: "/select_city",
        name: "select_city",
        component: () => import("../views/statistics/epidemic/Select_City.vue"),
      },
      {
        path: "/city_epidemic",
        name: "city_epidemic",
        component: () =>
          import("../views/statistics/epidemic/City_Epidemic.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  // hash类型的话，地址会多个#号
  base: process.env.BASE_URL,
  routes,
});

export default router;
