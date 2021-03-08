const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...
console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});

app.get( '/single', function( req, res ){ 
    res.sendFile( __dirname + '/public/single.html' );
});

app.get( '/multiplayer', function( req, res ){ 
    res.sendFile( __dirname + '/public/multiplayer.html' );
});

//websockets
io.on('connection', (socket) => {
//arrow is function (socket)
    console.log(socket.id + ' is connected');

    socket.on('disconnect', () => {
        console.log(socket.id + ' is disconnected');
    });

    //custom events

    socket.on('red', (data) => {
        console.log('red event received');
        io.sockets.emit('secondPos', 1); //send data to all sockets
    });

    socket.on('blue', (data) => {
        console.log('blue event received');
        io.sockets.emit('secondPos', 2);
    });

    socket.on('green', (data) => {
        console.log('green event received');
        io.sockets.emit('secondPos', 3);
    });

    socket.on('yellow', (data) => {
        console.log('yellow event received');
        io.sockets.emit('secondPos', 4);
    });

    //setIntervalFunc
});