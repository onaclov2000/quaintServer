// This is the implementation of a route server in javascript in the browser
// I don't see any reason you couldn't "pipe" the io.emit (route_request) as a part of
// say an express like app...but in the browser.
var routes = [];
routes.push('/onaclovtech'); // I only have 2 routes.
routes.push('/onaclov2000'); // I only have 2 routes.
console.log(routes);
var socket = io('http://192.168.0.13:3000');

socket.on('route_request', function(header) {
            //$('#messages').append($('<li>').text(msg));
            //if x then
            console.log("route_request");
            console.log(routes.indexOf(header.route));
            if (routes.indexOf(header.route) > -1) {
                if (header.route == "/onaclovtech") {
                    socket.emit('response', '<html><body><h3>Onaclovtech</h3></body></html>');
                }
                if (header.route == "/onaclov2000") {
                    socket.emit('response', '<html><body><h3>Onaclov2000</h3></body></html>');
                }
            });
