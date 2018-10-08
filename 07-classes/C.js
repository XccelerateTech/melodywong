/*Create a new function called Gambler with the properties cash and bet.
Initialize as many gamblers as you want, at least two.
Write a function called casino which let’s every gambler bet one after the other.
Every gambler loses their bet based on a different probabilities. (For example: gambler A loses with a probability of 0.6, gambler B loses with a probability of 0.4 …)
Return the order in which gamblers ran out of cash (or do they ran out of cash at all)
*/

class Gambler{
    constructor(options){
        this.name=options.name;
        this.cash=options.cash;
        this.probability=options.probability;
    }

    gamble(){
        this.bet=this.cash;
        
       if( Math.random()<this.probability){//lose
        this.cash=this.cash-this.bet
       }else{ //win
        this.cash=this.cash+this.bet
       }
       console.log(this.name+this.cash);
    }
}

var jason=new Gambler({name:'Jason',cash:100,probability:0.1});
var katy=new Gambler({name:'Katy',cash:100,probability:0.8});
var mimi=new Gambler({name:'Mimi',cash:100,probability:0.5});
var allPlayers=[jason,katy,mimi];
var processPlayers=[jason,katy,mimi];
var loserCount=0;
var loser=[];



function gambling(){
    while(loserCount<allPlayers.length){
        for(var i=0;i<allPlayers.length;i++){
            allPlayers[i].gamble();

            if(allPlayers[i].cash==0){
                loser.push(allPlayers[i].name);
                loserCount++;
                allPlayers.splice(i,1);
                
            }
            
        } 
        
        console.log("losers: "+loser);
     
    }
}
gambling();

//The casino function should be where each player gets to play one round with their cash adjusted based on their win/lose (maybe by using Math.random() and testing it against their losing chance?) and their bets (win = + and lose = -).
