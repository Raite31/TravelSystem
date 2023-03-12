import self_travelVue from "@/views/personal/self_travel.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // ====================登录页
  {
    path: "/",
    name: "",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/login/index.vue"),
  },
  // ====================个人主页
  {
    path: "/personal",
    name: "personal",
    component: () => import("@/views/personal/index.vue"),
  },

  // ============================================================travel的路由
  // ====================购物车
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/travel/cart/index.vue"),
  },
  // ====================主页
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/travel/home/index.vue"),
  },
  // ====================目的地
  {
    path: "/destination",
    name: "destination",
    component: () => import("@/views/travel/destination/index.vue"),
  },
  // ====================目的地详情页
  {
    path: "/destination/detail",
    name: "detail",
    component: () => import("@/views/travel/destination/detail.vue"),
  },
  // ====================旅行故事
  {
    path: "/story",
    name: "story",
    component: () => import("@/views/travel/story/story.vue"),
  },

  // ============================================================Blog的路由
  // ====================博客首页（列表)
  {
    path: "/blogList",
    name: "blogList",
    component: () => import("@/views/blog/index.vue"),
  },
  // ====================作者主页
  {
    path: "/author",
    name: "blogAuthor",
    component: () => import("@/views/blog/author/index.vue"),
  },

  // ====================写博客
  {
    path: "/pushBlog",
    name: "pushBlog",
    component: () => import("@/views/blog/author/pushBlog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // hash类型的话，地址会多个#号
  base: process.env.BASE_URL,
  routes,
});

export default router;
