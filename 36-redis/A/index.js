//use axios to get data and json parse from blockchain latest block api
//txindex 
//read latest block every 10 minutes

let redis = require('redis');
let async=require('async');
let axios=require('axios');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'password'
});

client.on('error', function(err){
    console.log(err);
});

let index=[];
let num=0;

axios.get('https://blockchain.info/latestblock')
  .then(function (response) {
    index=response.data.txIndexes;
    
    console.log("Got latest block");

  })
  .then(function () {


    async.eachSeries(index, function (item, next) { 
      setTimeout(function() {
           axios.get(`https://blockchain.info/rawtx/${item}`)
            .then(function(data){
                let push=data.data.hash;
                console.log("hash: ",data.data.hash)
                client.lpush('txIndex', push,function(err,data) {
                      
                        
                        if(err) {
                          console.log("lpush-error")
                          return console.log(err);
                      }
                    })
              })
           next(); // don't forget to execute the callback!
      }, 100);
    }, function () {
          console.log('Done going through all transactions!');
    });
    })


  .then(function(){
    client.llen('txIndex',function(err,data){
      console.log("length",data)
    })
    client.expire('txIndex',1,function(err,data){

      if(err) {
          console.log("expire-error")
          return console.log(err);
      }
    })
  })
  .catch(function (error) {
    console.log(error);
  });


app.listen(3000,()=>{
    console.log("Application started at port:3000");
});