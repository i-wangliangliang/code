/**
 * File:        example_event_emitter.js
 * Author:      Liangliang Wang
 * Date:        2018-10-19
 * Copyright:   2018 2020 willfox@126.com
 * Description: nodejs中的事件事例，事例启动后，10s触发事件
 * Usage:
 *      node example_event_emitter.js
 */


var events = require("events");
var progress_bar = require("./progress-bar");


var eventEmitter = events.EventEmitter;
var ee = new eventEmitter();
ee.on("foo", function(){
    console.log("foo 事件生效！");
});


console.log("foo 现在开始触发，10s钟后生效！");
var pb_inst = new progress_bar("事件进度", 50);

var progress = 0, total = 100;
function event_progress(){
    if(progress  <= total){
        pb_inst.render(progress, total);

        progress++;
        setTimeout(function(){
            event_progress();
        }, 100);
    }
    else{
        console.log("\r");
        ee.emit("foo");
    }
    
};

event_progress();