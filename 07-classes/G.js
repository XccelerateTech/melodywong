/*
Bat : A Bat can fly and feed milk
Fish : A Fish can swim and lay eggs
Whale : A Whale can swim and feed milk
Bird : A Bird can fly and lay eggs
*/

class Swimmer{
    get can_swim(){
        console.log( "A "+this.type+" can swim.");
    };
}

class Fish extends Swimmer{
    constructor(){
        super();
        this.type='fish';
    }

    get can_layEggs(){
        console.log( "A "+this.type+" can lay eggs.");
    }
}

class Whale extends Swimmer{
    constructor(){
        super();
        this.type='whale';
    }

    get can_feedMilk(){
        console.log( "A "+this.type+" can feed milk.");
    }
}

class Flyer{
    get can_fly(){
        console.log( "A "+this.type+" can fly.");
    };
}

class Bat extends Flyer{
    constructor(){
        super();
        this.type='bat';
    }

    get can_feedMilk(){
        console.log( "A "+this.type+" can feed milk.");
    }
}

class Bird extends Flyer{
    constructor(){
        super();
        this.type='bird';
    }
    get can_layEggs(){
        console.log( "A "+this.type+" can lay eggs.");
    }
}

const bat=new Bat;
bat.can_fly;
bat.can_feedMilk;

const fish=new Fish;
fish.can_swim;
fish.can_layEggs;

const whale=new Whale;
whale.can_swim;
whale.can_feedMilk;

const bird=new Bird;
bird.can_layEggs;
bird.can_fly;
