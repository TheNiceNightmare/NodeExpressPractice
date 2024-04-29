/* Usado Node Http */

const Http = require('http');

const server= Http.createServer((req, res)=>{
    console.log('requerimiento entrante')

resizeTo.writeHead(200,{'Content-Type': 'text/html'});

    res.end('<h1>Hola Mundo!</h1>');
});

server.listen(3005);