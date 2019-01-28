var express = require('express'); // 引用express模块
var cookie = require('cookie-parser');
var qs = require("qs");
var app = express();  // 创建一个简单的服务器

app.use(cookie());

var requestPort = 3001;  // 请求页面跑在3001端口

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");// 设置允许跨域的origin，允许3000端口访问本端口（3001）
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/', function (req, res) {
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send('Got a GET request');    
})

app.get('/setc', function (req, res) {
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.cookie('cookieType', '001', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.send('set cookie');    
})

app.get('/getc', function (req, res) {
    var reqCookie = qs.parse(req.cookies);
    res.send('get cookie'+ ' getCookie is '+reqCookie.cookieType);    
})

app.post('/api', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.listen(requestPort, () => console.log('Example app listening on port'+requestPort))