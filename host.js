const http=require('http');
// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Welcome to our');
//     }
// }).listen(5000);
const localhost='http://localhost:5000'; //127.0.0.1
const port=5000;
const server=http.createServer((req,res)=>{
        res.writeHead(250,{'content-type':'text/html'});    //text/plain for simple text
        res.write('<h1>Welcome to our Home Page</h1>');
        res.end();
});
server.listen(port,()=>{
    console.log(`Server listening on port ${port} : ${localhost}`);
});