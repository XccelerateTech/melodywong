const EventEmitter = require('events');
const user=require('./input');
const computer=require('./computer');

class Referee extends EventEmitter {
    constructor() {
        super();
    }

    judge(){
        console.log("user"+a)
        console.log("computer"+b)
    }
}

var userChoice=new user();
var computerChoice=new computer();
var referee=new Referee();
var a;
var b;


userChoice.on('receive-user',function(result){
    computerChoice.input();
    a=result;
    console.log('receive-user')
})

computerChoice.on('receive-computer',function(result){
    b=result;
   // referee.judge();
    console.log('receive-computer')
})



userChoice.input('paper');