//rpop, return reply, json parse, time out update every 5 seconds

let redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let length;

let client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'password'
});


client.on('error', function(err){
    console.log(err);
});


setInterval(function(){ 
    async function noName(){
        function check(){
            return new Promise(resolve => {
                client.llen('MessageQueue', function(err, data){
                    if(err) {
                        return console.log(err);
                    }
                    // console.log("data",data)
                    resolve(data);
                });
                 
                });
        }

        let length=await check();
        

        if(length>0){
        client.RPOP('MessageQueue', function(err, data){
                if(err) {
                    return console.log(err);
                }
                console.log('The message is ', data);
            });
        }else{
            console.log("No more message");
        }

    }
    
    noName();

    

}, 5000);



app.listen(3030,()=>{
    console.log("Application started at port:3030");
});