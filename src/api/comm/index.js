import request from "@/utils/request";

export function upload(data) {
  return request({
    url: "upload",
    method: "POST",
    data: data,
  });
}
