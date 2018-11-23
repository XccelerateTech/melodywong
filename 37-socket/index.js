const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection',(socket)=>{
  console.log(`Socket with id ${socket.id} connected!`);
});
io.emit('hello',"World!");


io.on('connection', (socket) => {
    let roomNumber
    console.log('a user connected to the socket');
    socket.on('room', function(room) {
        roomNumber=room;
        socket.join(room);
        console.log("user joined: ",room, roomNumber)
    });

    socket.on('chat message', function(msg){
        console.log('room: ' +  roomNumber);
        console.log('message: ' + msg);
        io.to(roomNumber).emit('chat message',msg);
    });

    socket.on('disconnect', () => console.log('a user left us'));
});



http.listen(3030);