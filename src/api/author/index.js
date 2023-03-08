import request from "@/utils/request";

// 获取作者所有博客
export function getAuthorBlog(data) {
  return request({
    url: "blog/authorBlogPage",
    method: "POST",
    data: data,
  });
}
// 获取作者信息
export function getAuthor(data) {
  return request({
    url: "getAuthor",
    method: "POST",
    data: data,
  });
}
