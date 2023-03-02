import request from "@/utils/request";

export function getBlogPage(data) {
  return request({
    url: "blog/getBlogPage",
    method: "POST",
    data: data,
  });
}
