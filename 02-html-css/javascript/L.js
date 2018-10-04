var string='';
var character='';
var counter=0;

function counting(string,character){

//split all words into characters
    string=string.toLowerCase();    
    string=string.split("");
//loop through all characters
    for(var i=0;i<string.length;i++){
        if(string[i]===character){
            //increse counter number
            counter++;
        }
    }
    //return number
    console.log(counter);

}

counting('Hello worlD.','o');