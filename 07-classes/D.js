/*Create a class with the name ‘Monster’.   
In the constructor of the class do some setup. The monster has health and a name.*/

class Monster {
  
    constructor(option){
      this.health=option.health;
      this.name=option.name;
    }
   
    wound(damage){
      this.health=this.health-damage;
      if(this.health<=0){
        console.log("monster dead");
    }
    }

    set Health(health){
        this.health=option.health;
    }

  }

//initialize the Monster’s health by giving it a health of 100


//the constructor will receive an options object. This object has a property name on it. 
//Use this object to give the Monster a name.
var monster=new Monster({health:100, name:'monster'});
console.log(monster);

//give that monster a method called wounded, that takes one parameter. 
//The parameter reduces the monsters health. If health is 0 console.log(‘monster dead’);

//create a function hero that calls the wounded method with a random number between 5-20.

function hero(){
    var a=Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    monster.wound(a);
}

//initialize the monster and try to kill it.

console.log(monster.health);

while(monster.health>0){
    hero();
    if(monster.health>0){
        console.log(monster.health);
    }
}
