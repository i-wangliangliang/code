/**
 * File:        example_buffer.js
 * Author:      Liangliang Wang
 * Date:        2018-10-19
 * Copyright:   2018 2020 willfox@126.com
 * Description: nodejs中的buffer操作事例
 *              JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
 *              但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 * 
 *              Buffer 提供了以下 API 来创建 Buffer 类：
 *                  Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
 *                  Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
 *                  Buffer.allocUnsafeSlow(size)
 *                  Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
 *                  Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
 *                  Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
 *                  Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
 * Usage:
 *      node example_buffer.js
 */

var buf1 = Buffer.alloc(128, 'a');
console.log("buf1: ", buf1.toString());

var buf2 = Buffer.allocUnsafe(128)
console.log("buf2: ", buf2.toString())

var buf3 = Buffer.from("hello world");
console.log("buf3: ", buf3.toString());

var buf4 = Buffer.from([1,2,3,4])
console.log("buf4: ", buf4.toString());

var buf5 = Buffer.from('tést', 'latin1');
console.log("buf5: ", buf5.toString());

var buf6 = Buffer.from([1,2,3,4])
console.log("buf6: ", buf6.toJSON());

var buf7 = Buffer.alloc(256);
var length = buf7.write("hello buf7")
console.log("buf7: ", buf7.toString())

var buf8 = Buffer.alloc(26)
for(var i = 0; i < buf8.length; i++){
    buf8[i] = i + 97
}
console.log("buf8: ", buf8.toString());
console.log("buf8[0-5]: ", buf8.toString("utf-8", 0,5))