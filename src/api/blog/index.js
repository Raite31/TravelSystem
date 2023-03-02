import request from "@/utils/request";

export function getBlog(data) {
  return request({
    url: "blog/getBlogPage",
    method: "POST",
    data: data,
  });
}
