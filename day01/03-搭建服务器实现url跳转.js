// 1 引入模块
const fs = require('fs')
const http = require('http')

// 2 创建服务器
const server = http.createServer()

// 3 监听请求事件，设置请求事件处理函数
server.on('request', (request, response) => {
    var url = request.url

    // 关于 setHeader() 的补充
    // 普通文本：response.setHeader('Content-Tyep', 'text/plain;chartset=utf-8')
    // html文本：response.setHeader('Content-type', 'text/html;chartset=utf-8')
    // 图片文本：response.setHeader('Content-Type', 'image/jpeg;chartset=utf-8')

    if (url === '/') { // 请求根路径的时候，在前端页面显示 index.html 文件
        // 读取文件
        fs.readFile('./data/index.html', (error, data) => {
            if (error) { // 文件读取失败
                response.end('文件读取失败')
            } else {
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data)
            }
        })

    } else if (url === '/dilireba') {
        fs.readFile('./data/dilireba.jpg', (error, data) => {
            if (error) { // 文件读取失败
                response.end('图片读取失败')
            } else {    
                response.setHeader('Content-Type', 'image/jpeg')
                response.end(data)
            }
        })
    }
})

// 4 绑定端口号
server.listen(3000, function () {
    console.log('Server is Running ...')
})




