/*
Bat : A Bat can fly and feed milk
Fish : A Fish can swim and lay eggs
Whale : A Whale can swim and feed milk
Bird : A Bird can fly and lay eggs
*/

//Ability
class Flyer{
    constructor(type){
        this.type=type;
    }
    fly(){
        console.log("A "+this.type+" can fly.")
    }
}

class Milker{
    constructor(type){
        this.type=type;
    }
    milk(){
        console.log("A "+this.type+" can feed milk.")
    }
}

class Swimmer{
    constructor(type){
        this.type=type;
    }
    swim(){
        console.log("A "+this.type+" can swim.")
    }
}

class Egger{
    constructor(type){
        this.type=type;
    }
    egg(){
        console.log("A "+this.type+" can lay eggs.")
    }
}

//Animal
class Bat{
    constructor(){
        this.flyer=new Flyer("bat");
        this.milker=new Milker("bat");
    }

    fly(){
        this.flyer.fly();
    }

    milk(){
        this.milker.milk();
    }
}

class Whale{
    constructor(){
        this.swimmer=new Swimmer("whale");
        this.milker=new Milker("whlae");
    }

    swim(){
        this.swimmer.swim();
    }

    milk(){
        this.milker.milk();
    }
}

class Fish{
    constructor(){
        this.swimmer=new Swimmer("fish");
        this.egger=new Egger("fish");
    }

    swim(){
        this.swimmer.swim();
    }

    egg(){
        this.egger.egg();
    }
}

class Bird{
    constructor(){
        this.flyer=new Flyer("bird");
        this.egger=new Egger("bird");
    }

    fly(){
        this.flyer.fly();
    }

    egg(){
        this.egger.egg();
    }
}

//Call
var bat=new Bat;
bat.fly();
bat.milk();

var whale=new Whale;
whale.swim();
whale.milk();

var fish=new Fish;
fish.swim();
fish.egg();

var bird=new Bird;
bird.fly();
bird.egg();