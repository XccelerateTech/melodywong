const EventEmitter = require('events');

class Computer extends EventEmitter {
    constructor() {
        super();
        this.choice;
    }

    input(){
        var choice='rock';
        this.emit('receive-computer',choice) ;
        console.log("computer "+choice);
        this.choice=choice;
        return choice;
    }
}




module.exports=Computer;