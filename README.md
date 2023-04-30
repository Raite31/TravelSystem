# TravelSystem

### 技术栈：

1. vue2.6.14 + pinia2.0.28 + vue-router4.1.6
2. element-plus
3. Node Express4.16.1 + nodemon
4. MongoDB

### 项目安装依赖并启动（测试案例）

#### 前端：

打开终端在 TravelSystem 中

```sh
npm install
```

然后

```sh
npm run serve
```

#### 后端：

打开终端在 TravelSystem/server 中

```sh
npm install
```

然后在 TravelSystem/server/src 中

```sh
nodemon serve.js 或者 npm run devstart
```

### 项目结构
server  ---------------------------服务器端
    --routes  ---------------------接口
src  ------------------------------前端
    --views
    --blog  -----------------------博客区
        --author  -----------------作者模块
    --login  ----------------------登录
    --personal  -------------------个人中心
    --travel  ---------------------旅游区
        --cart  -------------------购物车模块
        --destination  ------------目的地模块
        --home  -------------------首页模块
        --list  -------------------列表模块
        --story  ------------------旅行故事模块
            
        

### 组件库


### Compile and Hot-Reload for Development

````sh

### Lint with [ESLint](https://eslint.org/)

项目代码检查

```sh
npm run lint
````
