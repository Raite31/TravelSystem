import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import stores from "./stores";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import hevueImgPreview from "hevue-img-preview";
import editor from "@blog1997/vue-umeditor";
import * as echarts from "echarts";
import VueRouter from "vue-router";
// 富文本编辑器
import Vue2Editor from "vue2-editor";

Vue.prototype.$echarts = echarts;
Vue.use(editor);
Vue.use(hevueImgPreview);
Vue.use(ElementUI);
Vue.use(Vue2Editor);

Vue.config.productionTip = false;
new Vue({
  router,
  stores,
  render: (h) => h(App)
}).$mount("#app");
