import request from "@/utils/request";

// // 获取总的
export function addCart(data) {
  return request({
    url: "cart/addCart",
    method: "POST",
    data: data,
  });
}
// 获取购物车列表
export function getCartList(data) {
  return request({
    url: "cart/getCartList",
    method: "POST",
    data: data,
  });
}
