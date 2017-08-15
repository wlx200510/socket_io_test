var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('join', function(name) {
        socket.nickname = name;
        socket.broadcast.emit('announcement', name + ' join the chat.');
    })
    socket.on('chat message', function(msg, fn){
        socket.broadcast.emit('chat message', socket.nickname, msg);  // 服务端发送给客户端
        fn();
    });
    socket.on('disconnect', function(){
        console.log('a user disconnected');
        io.emit('disconnectInform', socket.nickname + ' has just left now');
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