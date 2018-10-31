const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json)


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/login',(req,res)=>{
	console.log(req.body);
	res.send("Login infomation received.");
});

app.listen(8080)