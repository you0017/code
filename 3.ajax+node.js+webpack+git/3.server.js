//1.加载http响应模块，创建web服务对象
const http = require('http');
const server = http.createServer();

//2.监听request请求事件，设置响应头和响应体
server.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('HTTP服务')
    console.log(req.url)
})

//3.启动web服务器，监听端口
server.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1')
})