var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var response = {};
var clients = 0;
var routes = {};


// build an on disconnect to remove routes from list.
io.on('connection', function(socket) {
    console.log("a new server is online");
    clients++;
    socket.on('response', function(result) {
        console.log(result);
        if (response !== null) {
            response.send(result); // in theory return what a connected client returns;
            response = {};
        }
    });
    
    // We should theoretically have a list of all of our routes for a particular socket
    socket.on('routes', function(results) {
      console.log("routes response");
        for (result in results){
            routes[results[result]] = socket;
        }
    });
    
    io.emit('routes', {});
    
});


app.get('/sitemap', function(req, res) {
    console.log(Object.keys(routes));
    var response_string = "<html><body>";
    var keys = Object.keys(routes);
    for (key in keys){
      response_string = response_string + '<a href=\'http://192.168.0.13:3000' + keys[key] + '\'>' + keys[key] + '</a><br/>';
    }
    response_string = response_string + '</body></html>';
    res.send(response_string);
});



app.get('*', function(req, res) {
    console.log(req.url);
    io.emit('get', {
        route: req.url
    }); // Emit to everyone that is calling
    response = res;
});



app.post('*', function(req, res) {
    console.log(req.url);
    // in theory we should know our routes,
    // and at this point, we send the data to the right route.
    // this way we don't have any issues with storing data across the entire connection network
    // which may or may not be a security issue (storing everywhere).
    io.emit('post', {
        route: req.url,
        data : req.data // this probably needs fixing, research
    }); // Emit to everyone that is calling
    response = res;
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
