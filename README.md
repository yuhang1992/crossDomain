### 跨域的简单小demo
这是一个关于跨域的简单demo集合，在demo里面会加上自己的理解并添加相应的注释

### demo介绍
用node的web框架express在`3000端口`和`3001端口`分别开启一个静态服务器，在两个端口间进行跨域传输数据。

### Set Up
运行环境
- node.js 全局安装
- npm 全局安装

运行步骤
1. `git clone https://github.com/yuhang1992/crossDomain.git`
2. cross-domain目录下npm install，下载项目所需的依赖
3. 进入对应的demo目录，①node request.js  ②重新开一个窗口   ③node response.js

### 1. CORS跨域

项目运行起来之后，
- 请求数据页面地址： http://localhost:3000
- 查看数据： http://localhost:3001


### 2. JSONP跨域

项目运行起来后，
- 请求页面： http://localhost:3000
- 响应页面为 http://localhost:3001


