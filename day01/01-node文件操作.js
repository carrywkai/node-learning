
// node 中的 fs 模块提供了 node 对文件操作得当左右API

// 1 引入 fs 模块
const fs = require('fs')

// 2 调用 fs 模块提供的API

// 读取文件
fs.readFile('./data/readFile.txt', (error, data) => {
    // 读取文件是一个异步操作，有二个结果：读取文件失败 和 读取文件成功
    if (error) { // 读取文件失败
        console.log('文件读取失败')
    } else { // 文件读取成功
        var arr = []
        for (var i = 0; i < data.toString().length; i++) {
            arr.push(data.toString()[i])
        }
        console.log(arr)
    }

})

// 写文件
fs.writeFile('./data/writeFile.txt', '十三香小龙虾', function (error) { // 写入文件会覆盖以前的内容
    console.log('文件写入成功');
})  

