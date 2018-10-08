//Create a constructor called Person, it has two properties name, age.   Call this constructor.

class Person{
    constructor(options){
        this.name=options.name;
        this.age=options.age;
    }
}

var person=new Person({name:'Tom', age:44});
console.log(person);
