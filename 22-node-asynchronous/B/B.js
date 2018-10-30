//write a function that receives a path as parameter. It should copy the file to another folder at a different location, defined in the function.

var fs = require('fs');


function copy(path){
    var readable = fs.createReadStream(__dirname + `${path}`, 'utf8');

    var writeable = fs.createWriteStream(__dirname + '/folder2/textcopy.txt');

    readable.pipe(writeable);
}


copy('/folder1/original.txt') // copies to new folder 'path/to/anotherFolder/file.txt'