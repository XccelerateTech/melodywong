/*create a class called Student which has the property gpa.   
Overriding the info method such that the .info() method return the following string instead. */

class Person {
    constructor(options) {
        this.name = options.name;
        this.age= options.age
    }

    info() {
        console.log("The person is called "+this.name+" and is "+this.age+" years old")
    }
}

class Student extends Person {
    constructor(options) {
        super(options);
        this.gpa = options.gpa;
    }

    info() {
        console.log("The student is called "+this.name+" and is "+this.age+" years old. He has an overall GPA of "+this.gpa+" in the university.")
    }
}

const student = new Student ({age: 44, name: 'Tom', gpa:'4.0'})

student.info()//The student is called Tom and is 44 years old. He has an overall GPA of 4.0 in the university.