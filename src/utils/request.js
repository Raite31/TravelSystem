import axios from "axios"; // 引入axios
import router from "../router";
//element-ui 的loging，和信息提示
import { Loading, Message } from "element-ui";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// 创建axios实例
const service = axios.create({
  baseURL: "front/api",
  timeout: 3000,
  withCredentials: false,
});

// 响应拦截器
// service.interceptors.response.use(
//   (res) => {
//     console.log("res: ", res);
//     if (res.status == 200 && res.data.code == 200) {
//       Message.success({ message: res.data.msg, duration: 500 });
//       return res.data;
//       console.log("1111");
//     } else if (res.status == 200 && res.data.code == 401) {
//       Message.error({ message: res.data.msg, duration: 500 });
//       // 跳转到登录页
//       routers.replace("/");
//     } else {
//       Message.error({ message: res.data.msg, duration: 500 });
//     }
//   },
//   (error) => {
//     if (error.response.status == 500) {
//       Message.error({ message: "服务器错误" });
//     } else if (error.response.status == 404) {
//       Message.error({ message: "页面走丢了……" });
//     } else if (error.response.status == 401) {
//       Message.error({ message: "权限不足，无法访问" });
//     } else {
//       Message.error({ message: "未知异常，无法访问" });
//     }
//   }
// );

//最后导出实例
export default service;
