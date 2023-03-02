import request from "@/utils/request";

export function getDestinationPage(data) {
  return request({
    url: "destination/getDestinationPage",
    method: "POST",
    data: data,
  });
}
