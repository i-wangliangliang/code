/**
 * File:        example_event_loop.js
 * Author:      Liangliang Wang
 * Date:        2018-10-14
 * Copyright:   2018 2020 willfox@126.com
 * Description: nodejs中的事件循环验证
 * Usage:
 *      node example_event_loop.js
 */


var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("连接成功！");

    eventEmitter.emit("data_recieve");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_recieve", function(){
    console.log("数据接收成功！");
})


// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");