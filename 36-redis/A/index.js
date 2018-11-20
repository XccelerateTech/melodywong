//use axios to get data and json parse from blockchain latest block api
//txindex 
//read latest block every 10 minutes

var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'password'
});

client.on('error', function(err){
    console.log(err);
});

client.auth('password', function(err, data) {
    if(err) {
        return console.log(err);
    }
    console.log("entered password")
    });

client.setex('location', 60, 'Hong Kong', function(err, data) {
    if(err) {
        return console.log(err);
    }
});

client.get('location', function(err, data){
        if(err) {
            return console.log(err);
        }
        console.log('The value is ', data);
    });
