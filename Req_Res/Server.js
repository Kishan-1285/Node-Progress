const http = require('http');
const { Script } = require('vm');

const server = http.createServer((req,res)=>{
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method)

    res.setHeader('Content-Type','text/html');
    res.write('<head rel="Script" href=""></head>')
    res.write('<h1>Heading</h1>');
    res.write('<h4>The ending</h4>')
    res.end();
})

server.listen(1111,'localhost',()=>{
    console.log("Server is listening")
})