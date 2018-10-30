var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type':'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/main.css') {
        res.writeHead(200, { 'Content-Type':'text/css' });
        fs.createReadStream(__dirname + '/main.css').pipe(res);
    }else if(req.url === '/images/flower-icon.png') {
        res.writeHead(200, { 'Content-Type':'image/png' });
        fs.createReadStream(__dirname + '/images/flower-icon.png').pipe(res);
    }else if(req.url === '/images/flowershop.jpg') {
        res.writeHead(200, { 'Content-Type':'image/jpg' });
        fs.createReadStream(__dirname + '/images/flowershop.jpg').pipe(res);
    }else if(req.url === '/images/logo.png') {
        res.writeHead(200, { 'Content-Type':'image/png' });
        fs.createReadStream(__dirname + '/images/logo.png').pipe(res);
    }else if(req.url === '/images/payment-icon.png') {
        res.writeHead(200, { 'Content-Type':'image/png' });
        fs.createReadStream(__dirname + '/images/payment-icon.png').pipe(res);
    }else if(req.url === '/images/phone-icon.png') {
        res.writeHead(200, { 'Content-Type':'image/png' });
        fs.createReadStream(__dirname + '/images/phone-icon.png').pipe(res);
    }else if(req.url === '/images/truck-icon.png') {
        res.writeHead(200, { 'Content-Type':'image/png' });
        fs.createReadStream(__dirname + '/images/truck-icon.png').pipe(res);
    }else {
        res.writeHead(404);
        res.end();
    }


}).listen(8080, '127.0.0.1');