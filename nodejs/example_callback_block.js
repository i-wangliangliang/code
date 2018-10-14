/**
 * File:        example_callback_block.js
 * Author:      Liangliang Wang
 * Date:        2018-10-14
 * Copyright:   2018 2020 willfox@126.com
 * Description: 先输出example_callback_nonblock.js文件内容，然后输出"程序执行结束！"
 * Usage:
 *      node example_callback_block.js
 */


var fs = require("fs");

var data = fs.readFileSync("example_callback_block.js");

console.log(data.toString());

console.log("程序执行结束！");