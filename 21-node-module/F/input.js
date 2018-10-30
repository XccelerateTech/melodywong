const EventEmitter = require('events');

class User extends EventEmitter {
    constructor() {
        super();
    }

    input(choice){
        // console.log("user "+choice);
       this.emit('receive-user',choice) 
    }
}

module.exports=User;