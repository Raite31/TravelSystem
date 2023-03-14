const { defineConfig } = require("@vue/cli-service");

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭Eslint语法检查
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  devServer: {
    proxy: {
      "/front/api": {
        // 这个别名也很重要
        target: "http://127.0.0.1:3000/", //实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/front\/api/, ""),
      },
    },
  },
});
