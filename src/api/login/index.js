import request from "@/utils/request";

// // 检验登录
export function checkLogin(data) {
  return request({
    url: "destination/getDestinationPage",
    method: "POST",
    data: data,
  });
}
