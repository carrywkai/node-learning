
// 搭建服务器的模块是 http

// 1 引入模块
const http = require('http')

// 2 创建服务器
const server = http.createServer()

// 3 监听服务器请求
server.on('request', (request, response) => {

    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.end('<h2>服务请响应成功</h2>')
})

// 4 绑定端口号
server.listen(3000, function () {
    console.log('Serve is Running ...')
})



