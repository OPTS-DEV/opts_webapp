# opts_webapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



####> 初始化步骤
> 前提：已安装node 、vue-cli、webpack

1、git clone  拉取代码

2、cd project-dir

3、npm install 安装依赖

4、npm install element-ui -S 安装ElementUI
 
5、npm install axios --save  安装axios

6、npm run dev  或者 windows下运行 OPTS_WEBAPP_STARTER.bat


####> 说明
``` bash
1、src/Global.vue 存放全局变量，例如请求地址前缀

2、src/assets/js/http.js 抽离了 GET/POST 等 http请求封装

3、src/assets/js/api.js 抽离 API 请求，新增请求 也在里面添加 vue文件 直接 import 使用即可


