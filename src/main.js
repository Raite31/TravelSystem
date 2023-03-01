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
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.prototype.$echarts = echarts;
Vue.use(editor);
Vue.use(hevueImgPreview);
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
new Vue({
  router,
  stores,
  render: (h) => h(App),
}).$mount("#app");
