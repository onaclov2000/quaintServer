// I don't see any reason you couldn't "pipe" the io.emit (route_request) as a part of
// say an express like app...but in the browser.
var routes = [];
routes.push('/onaclovtech'); // I only have 2 routes.
console.log(routes);
var socket = io('http://192.168.0.13:3000');

socket.on('get', function(header) {
    console.log("get server 1");
    console.log("server 1 " + routes.indexOf(header.route));
    if (routes.indexOf(header.route) > -1) {
        if (header.route === "/onaclovtech") {
            socket.emit('response', '<html><body><h3>Onaclovtech</h3></body></html>');
        }
    }
});

socket.on('routes', function() {
            socket.emit('routes', routes);
});

socket.on('put', function(header) {
    console.log("put server 1");
    console.log("server 1 " + routes.indexOf(header.route));
    if (routes.indexOf(header.route) > -1) {
        if (header.route === "/onaclovtech") {
            socket.emit('response', '<html><body><h3>Onaclovtech</h3></body></html>');
        }
    }
});
