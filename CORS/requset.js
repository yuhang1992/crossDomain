var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 3000;  // 请求页面跑在3000端口

app.use(express.static(__dirname + '/static')); //3000端口的静态文件，即index.html

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort); // 在dos窗口会执行这个回调函数
});