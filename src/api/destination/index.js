import request from "@/utils/request";

export function test(data) {
  return request({
    url: "check",
    methods: "GET",
    params: data,
  });
}
