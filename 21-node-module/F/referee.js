const user=require('./input');
const computer=require('./computer');

var userChoice=new user();
var computerChoice=new computer();

userChoice.on('receive-user',function(){
    var computerChoice=new computer();
    computerChoice.input();
})

computerChoice.on('receive-computer',function(){
    console.log(computerChoice.input())
})



userChoice.input('paper');