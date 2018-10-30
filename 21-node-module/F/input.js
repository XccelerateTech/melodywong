const EventEmitter = require('events');

class User extends EventEmitter {
    constructor() {
        super();
        this.choice;
    }

    input(choice){
        // console.log("user "+choice);
       this.emit('receive-user',choice) 
       this.choice=choice;
    }
}

module.exports=User;