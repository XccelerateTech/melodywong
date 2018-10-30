const EventEmitter = require('events');
const user=require('./input');
const computer=require('./computer');

var userChoice=new user();
var computerChoice=new computer();
var a='';
var b;

class Referee extends EventEmitter {
    constructor() {
        super();
        this.arr=[];
    }

    listen(result){

        this.arr.push(result);
        if(this.arr.length>1){
            this.emit('receive-both') 
        }
    }

    judge(){
        var user=this.arr[1];
        var computer=this.arr[0];
        if(user==='paper'&&computer==='scissors'){
            console.log("Computer wins.")
        }else if(user==='paper'&&computer==='rock'){
            console.log("User wins.")
        }else if(user==='scissors'&&computer==='rock'){
            console.log("Computer wins.")
        }else if(user==='scissors'&&computer==='paper'){
            console.log("User wins.")
        }else if(user==='rock'&&computer==='paper'){
            console.log("Computer wins.")
        }else if(user==='rock'&&computer==='scissors'){
            console.log("User wins.")
        }else{
            console.log("Draw.")
    }

    }
}

var referee=new Referee();

referee.on('receive-both',function(){
    referee.judge();
})

computerChoice.on('receive-computer',function(result){
    referee.listen(result);
})

userChoice.on('receive-user',function(result){
    computerChoice.input();
    referee.listen(result);
})

userChoice.input('paper');

