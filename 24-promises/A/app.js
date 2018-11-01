//Create a module that contains a promised version of fs.readdir and fs.stat. Similar to the example above.

const fs = require('fs');
let folder;

function readdir(path) {
    folder=path;
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function stat(path){
    return new Promise((resolve,reject)=>{
        fs.stat((folder+"/"+path),function(err, stats){
            if (err){
                reject(err);
            }else if(stats.isFile()==true){
                resolve(folder+"/"+path+' is a file');
            }else if(stats.isDirectory()==true){
                
                resolve(folder+"/"+path+' is a directory');
              
            }
        })

//  }
        
    })
   
    

}

readdir('./files')
    .then(function(response){

        for(var i=0;i<response.length;i++){
                stat(response[i]).then(function(response){console.log(response)})
            }
        }
    )

    .catch(err => console.log(err));;

