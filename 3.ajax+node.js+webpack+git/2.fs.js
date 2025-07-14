//console.log("Hello World")

const fs = require("fs")
fs.writeFile("./file/test.txt","Hello World",()=>{
    console.log("写入成功")
})

fs.readFile("./file/test.txt","utf-8",(err,data)=>{
    if (err) console.error(err)
    console.log(data)
})

const path = require("path")
console.log(path.resolve("./file/test.txt"))
console.log(__dirname)