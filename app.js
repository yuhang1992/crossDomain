var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 3000;  // 请求页面跑在3000端口

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(requestPort, () => console.log('Example app listening on port'+requestPort))