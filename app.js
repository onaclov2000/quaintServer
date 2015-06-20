var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var response = {};

io.on('connection', function(socket) {
    console.log("a new server is online");
    socket.on('response', function(result) {
        console.log(result);
        if (response) {
            response.send(result); // in theory return what a connected client returns;
            response = {};
        }
    });
});


app.get('*', function(req, res) {
    console.log(req.url);
    io.emit('route_request', {
        route: req.url
    }); // Emit to everyone that is calling

    response = res;
    /*  // Not quite working right
    setTimeout(function() {
        if (response) {
            response.send("This Endpoint isn't built, please check your url");
            response = {};
        }
    }, 1000)
    */
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
