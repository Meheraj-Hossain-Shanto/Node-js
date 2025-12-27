const http = require('http');
const fs = require('fs');
const port = 3000;
const localhost ='localhost'; //127.0.0.1

const server = http.createServer((req, res) => {
    const hosting= (source, filename) => {
        res.writeHead(source, {'Content-Type': 'text/html'});
        fs.readFile(filename, (err, data) => {
            res.write(data);
            res.end();
        });
    };

    if (req.url === '/') {
        let source = 200;
        let filename = './demo/homepage.html';
        hosting(source, filename);
    }
    else if (req.url === '/about') {
        let source = 200;
        let filename = './demo/aboutpage.html';
        hosting(source, filename);
    }else if (req.url === '/contact') {
        let source = 200;
        let filename = './demo/contactpage.html';
        hosting(source, filename);
    } else {
        let source = 404;
        let filename = './demo/error.html';
        hosting(source, filename);
    }
});

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.readFile('./demo/homepage.html', (err, data) => {
//         res.write(data);
//         res.end();
//     });
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.readFile('./demo/aboutpage.html', (err, data) => {
//         res.write(data);
//         res.end();
//     });
//     } else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.readFile('./demo/contactpage.html', (err, data) => {
//         res.write(data);
//         res.end();
//     });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         fs.readFile('./demo/error.html', (err, data) => {
//         res.write(data);
//         res.end();
//     });
//     } 
// });
server.listen(port, localhost, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
});