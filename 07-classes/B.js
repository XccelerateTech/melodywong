/* a name and health property
an attack method which takes away 10 health per attack
initialize two players
Write a function that randomly decide which player attacks. Math.random() could be handy. After each attack console.log who won.
Let both players fight until one has 0 health left, the other one wins. Console.log the winner.
*/

class Player{
    constructor(options){
        this.name=options.name;
        this.health=options.health;
    }
    attack(){
        this.health-=10;
    }
    add(){
        this.health+=5;
    }
}

var player1=new Player({name:'player1',health:100});
var player2=new Player({name:'player2',health:100});

var player1Counter=0;
var player2Counter=0;

var which=0;

while(player1.health>0&&player2.health>0){
which=Math.floor(Math.random() * Math.floor(2))

if (which===0){
    player1.attack();
    console.log("player 2 attacked! Health: player1-"+player1.health+", player2-"+player2.health)
    player2Counter++;
    player1Counter=0;
}else if(which===1){
    player2.attack();
    console.log("player 1 attacked! Health: player1-"+player1.health+", player2-"+player2.health);
    player1Counter++;
    player2Counter=0;
}

//call health method
if(player1Counter==3){
    player1.add();
    console.log("player1 added 5 health. Health: player1-"+player1.health+", player2-"+player2.health);
    player1Counter=0;
}else if(player2Counter==3){
    player2.add();
    console.log("player2 added 5 health. Health: player1-"+player1.health+", player2-"+player2.health);
    player2Counter=0;
}

}


if(player1.health>0){
    console.log("**player 1 wins!")
}else{
    console.log("**player 2 wins!")
}