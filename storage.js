// I don't see any reason you couldn't "pipe" the io.emit (route_request) as a part of
// say an express like app...but in the browser.
var routes = [];
routes.push('/message'); // I only have 2 routes.
routes.push('/messages'); // I only have 2 routes.
console.log(routes);
var messages = {};
var socket = io('http://192.168.0.13:3000');

socket.on('get', function(header) {
    console.log("get storage server");
        if (header.route === "/messages") {
            socket.emit('response', '<html><body><h3>' + messages + '</h3></body></html>');
        }
});


socket.on('routes', function() {
            socket.emit('routes', routes);
});

socket.on('post', function(header, data) {
    console.log("post storage server");
        if (header.route === "/message") {
            console.log(data);
            messages.push(data);
            socket.emit('response', '<html><body><h3>successful post</h3> ' + data + ' </body></html>');
        }
    }
});
