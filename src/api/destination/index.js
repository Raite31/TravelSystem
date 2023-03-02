import request from "@/utils/request";

// // 获取总的
export function getDestinationPage(data) {
  return request({
    url: "destination/getDestinationPage",
    method: "POST",
    data: data,
  });
}

// 获取分类为hots的
export function getDestinationHots(data) {
  return request({
    url: "destination/getDestinationHots",
    method: "POST",
    data: data,
  });
}

// 获取分类为recommend的
export function getDestinationRecommend(data) {
  return request({
    url: "destination/getDestinationRecommend",
    method: "POST",
    data: data,
  });
}

// 获取分类为recommend的
export function getDestinationLowPrice(data) {
  return request({
    url: "destination/getDestinationLowPrice",
    method: "POST",
    data: data,
  });
}

