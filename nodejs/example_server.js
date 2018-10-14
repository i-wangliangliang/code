/**
 * File:        example_server.js
 * Author:      Liangliang Wang
 * Date:        2018-10-14
 * Copyright:   2018 2020 willfox@126.com
 * Description: 第一个服务器程序
 * Usage:
 *      node example_server.js
 */

var http = require('http');
var ip = "127.0.0.1";
var port = 8888;

http.createServer(function(request, response){
    
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {"Content-Type": "text/plain"});

    // 发送响应数据 "Hello World"
    response.end("Hello World\n");
}).listen(port, ip)

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8888");