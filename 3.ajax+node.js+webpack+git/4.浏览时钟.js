const http = require('http');
const server = http.createServer();

const fs = require('fs');
let read = '';
fs.readFile('./file/时钟.html',(err,data)=>{
    if (err) throw err;
    read = data.toString();
})

server.on('request',(req,res)=>{
    if (req.url === '/clock.html'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(read);
    } else {
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('404 Not Found');
    }
})

server.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000')
})