import request from "@/utils/request";

// // 获取总的
export function addCart(data) {
  return request({
    url: "cart/addCart",
    method: "POST",
    data: data,
  });
}
