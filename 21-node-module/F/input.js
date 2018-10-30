const EventEmitter = require('events');

class User extends EventEmitter {
    constructor() {
        super();

    }

    input(choice){
        console.log("User: "+choice);
   
       this.emit('receive-user',choice) 
       return choice;    
    }
}

module.exports=User;