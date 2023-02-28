import axios from "axios";
import { Message, MessageBox, Notification } from "element-ui";
import routers from "../router/index";

// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:3000/front/api/",
  timeout: 3000,
  withCredentials: false,
});

service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

service.interceptors.request.use(
  function (config) {
    Vue.$loading.show();
    if (store.state.token) {
      config.headers.Authorization = store.state.token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
    //这是promise的一个方法，执行的结果是一个promise，而且会立刻执行catch方法，并把参数传到catch里
  }
);
//请求拦截

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Toast({
            message: "登录过期，请重新登录",
            duration: 1000,
            forbidClick: true,
          });
          // 清除token
          store.dispatch("FedLogOut").then(() => {
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          });
          break;

        // 404请求不存在
        case 404:
          Toast({
            message: "网络请求不存在",
            duration: 1500,
            forbidClick: true,
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Toast({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true,
          });
      }
      return Promise.reject(error.response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.commit("changeNetwork", false);
    }
  }
);

//最后导出实例
export default service;
