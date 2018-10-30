const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor() {
        super();
    }

    input(){
        var number=Math.floor(Math.random() * 3) + 1; 
        
        if(number==1){
            var choice='rock';
        }else if(number==2){
            choice='paper';
        }else{
            choice='scissors';
        }


        console.log("Computer: "+choice);
        this.emit('receive-computer',choice) ;

        return choice;
    }
}




module.exports=Computer;