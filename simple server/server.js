var http = require('http');
var fs = require('fs');
var url  = require('url');

function renderHTML (path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            renderHTML('./index.html',response);
            break;
        case '/login':
            renderHTML('./login.html',response);
            break;
        default:
            response.writeHead(404);
            response.write('route not defined');
            response.end();
    }
}

http.createServer(onRequest).listen(8000);

