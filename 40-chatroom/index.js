const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function(err){
    console.log(err);
});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//load index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//load old message from redis
app.get('/room1', (req, res) => {
    function range(){
        return new Promise ((resolve,reject)=>{
            client.lrange('room1',0,10,function(err, data) {
                console.log("data",data);
                resolve (data);
        
                if(err) {
                    reject (err);
                }
            })
        
        })
    }
        
    async function async(){
        let result=await range();
        console.log("range is", result)
        
        res.json(result)
    }

    async()
   
});


//auth-id
let id=1;

//io on receive message

io.on('connection', (socket) => {
    let roomNumber='room1';
    console.log('a user connected to the socket');
    socket.on('room', function(room) {
        roomNumber=room;
        socket.join(room);
        console.log("user joined: ",room, roomNumber)
    });

    socket.on('chat message', function(msg){
        console.log('room: ' +  roomNumber);
        chatObject={
            roomNumber:roomNumber,
            id:id,
            msg:msg
        }
        message=JSON.stringify(chatObject)
        console.log('message: ' + message);
        io.to(roomNumber).emit('chat message',msg);

        //push to redis list
        client.rpush(`${roomNumber}`,message,function(err, data) {
            console.log("rpush data",data)
            if(err) {
                return console.log(err);
            }
        })
        
        client.llen(`${roomNumber}`,function(err, data) {
            console.log("llen data",data)

            if(err) {
                return console.log(err);
            }
        })

    });

    socket.on('disconnect', () => console.log('a user left us'));
});


//on load page redis lrange [0] - [10]
//on click, redis lrange [11] - [20]


//setTimeout, write redis data to db and del redis


http.listen(3030,()=>{
    console.log("Application started at port:3030");
});