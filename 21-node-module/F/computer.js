const EventEmitter = require('events');
const user=require('./input');

class Computer extends EventEmitter {
    constructor() {
        super();
    }

    input(){
        var choice='rock';
       this.emit('receive-computer',choice) ;
    //    console.log("computer "+choice);
        return choice;
    }
}

// var userChoice=new user();



module.exports=Computer;