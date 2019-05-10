//Extend is used to create subclass from the parent class
//super - call the constructor of the parent class and to call method of parent class
//you can use this in the sub-class only after calling super
class Person {
    constructor(firstName, gender, age) {
        this.firstName = firstName;
        this.gender = gender;
        this.age = age;
    }

    displayFirstName() {
        return this.firstName;
    }

    displayAge() {
        return this.age;
    }

    displayGender() {
        return this.gender;
    }
}

class fighter extends Person {
    constructor(firstName, gender, age, category) {
        super(firstName, gender, age);
        this.category = category;
    }
    
    displayCategory() {
        return this.category;
    }
}

let mmaFighter = new fighter("Ivan", "male", 23, "middleweight");
console.log(mmaFighter.displayFirstName());
console.log(mmaFighter.displayAge());
console.log(mmaFighter.displayCategory());