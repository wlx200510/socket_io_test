var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);  // 服务端发送给客户端
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
        io.emit('disconnectInform', 'a user has left now');
    });
});
app.use(express.static('socketIo'))
app.use(function(err, req, res, next) {
    console.log(err);
    res.render('error', {status: 500});
})
http.listen(4000, function(){
    console.log('listening on *:4000');
})