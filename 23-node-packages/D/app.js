const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/',(req,res)=>{
    var array=JSON.parse(JSON.stringify(req.body));
    array=array.arr.split(',')
    console.log(array)
    var sum=0;
    for(var i=0;i<array.length;i++){
        var number=Number(array[i])
        sum=sum+number;
    }

    console.log("sum is "+sum);
	res.send("it console logs the sum: " + sum);
});

app.listen(8080)