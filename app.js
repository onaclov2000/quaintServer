var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket) {
    console.log('a user connected');
    app.get('*', function(req, res) {
        io.emit('route_request', {
            route: req.url
        }); // Emit to everyone that is calling

        socket.on('response', function(http_response, result) {
            console.log(result);
            http_response.send(result); // in theory return what a connected client returns
        }.bind(null, res));
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
