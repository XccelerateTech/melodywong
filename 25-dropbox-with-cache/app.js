/*Create a HTTP Server. (express)
Read file from local (fs with Promise)
Handle HTTP Request.
Pass file content to server via GET/POST request
Save file content to server (fs with Promise)
Handle HTTP Response.
Retrieve file content from server storage for the first request
Create middleware to cache (store) the response data. (using array)
Retrieve file content from cache afterward using a url
*/

const express = require('express');
const bodyParser = require('body-parser');
const multer=require('multer')
const fs = require('fs');

const path = require('path');
const app = express();
let cache = [];
let upload= multer();

app.use(express.static('files'));

app.use(bodyParser.urlencoded({ extended: false }))



app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

//read the file, write in the files folder
app.post('/upload',upload.single('profile'),(req,res)=>{

    function writeFile(){
        var readable = req.file;
        var buffer=readable.buffer;

        return new Promise((resolve,reject)=>{
            fs.writeFile('./files/'+readable.originalname, buffer, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                resolve(readable.originalname);
            });
       
    })

    }


    writeFile()
        .then(function(result){
            cache.push(result);
            
            res.redirect('/');
        })
        // .then(function(){ 
        //     res.redirect('/');
        // })
        .catch((err) => console.log('uh oh error', err));
	
});



//read the file the user want and save it to the local computer
app.get('/files/:id', function(req, res){
    var fileName=req.params.id;
    
    function download(fileName){
            res.download('./files/'+fileName,fileName,function(err){
                if (err){
                  console.log(err);
                } else {
                  console.log('downloading successful');
                }
            });

    }
    
    download(fileName)
});

app.get('/allfiles', function(req, res){
    // setTimeout(function(){ 
        res.send(cache);
        
    // }, 1000);
    
});

app.listen(8080)