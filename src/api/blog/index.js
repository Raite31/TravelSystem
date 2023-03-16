import request from "@/utils/request";

// 获取总的
export function getBlogPage(data) {
  return request({
    url: "blog/getBlogPage",
    method: "POST",
    data: data,
  });
}

// 获取博客详情
export function getBlogDetail(data) {
  return request({
    url: "blog/getBlogDetail",
    method: "POST",
    data: data,
  });
}

// // 获取分类为red的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为City_escapes的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Destination_experiences的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Eat_drink的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Stay的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Culture_history的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Travel_style的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }
// // 获取分类为Related的
// export function getBlogPage(data) {
//   return request({
//     url: "blog/getBlogPage",
//     method: "POST",
//     data: data,
//   });
// }