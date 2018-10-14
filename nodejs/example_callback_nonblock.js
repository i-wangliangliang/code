 /**
 * File:        example_callback_nonblock.js
 * Author:      Liangliang Wang
 * Date:        2018-10-14
 * Copyright:   2018 2020 willfox@126.com
 * Description: 先输出"程序执行结束！", 然后输出example_callback_nonblock.js文件内容
 * Usage:
 *      node example_callback_nonblock.js
 */

var fs = require("fs");

fs.readFile("example_callback_nonblock.js", function(err, data){
    if(err){
        return console.error(err);
    }

    console.log(data.toString());
})

console.log("程序执行结束！");