let redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'password'
});


client.on('error', function(err){
    console.log(err);
});

client.llen('MessageQueue', function(err, data){
        if(err) {
            return console.log(err);
        }
        console.log('The message queue in A length is ', data);
    });

app.post('/',function(req,res){

    client.LPUSH('MessageQueue', `msg: ${req.body.msg}, date: ${req.body.date}`, function(err, data) {
        if(err) {
            console.log("lpush-ed")
            return console.log(err);
        }
    });

    // client.RPOP('MessageQueue', function(err, data){
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log('The value is ', data);
    // });
    
})

app.listen(3000,()=>{
    console.log("Application started at port:3000");
});