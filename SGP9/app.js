var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Conten-type' : 'text/plain'});
    res.end('Hellp World');
});

server.listen(8000);