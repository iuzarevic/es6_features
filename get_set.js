class Person {
    constructor(name) {
        this.name = name;
    }
    //getter method
    get Name() {
        return this.name;
    }
    //setter method
    set Name(name) {
        this.name = name;
    }
}

let person = new Person("Ivan");
console.log(person.Name); //getName function is called without parenthesis
person.Name = "John"; //setName function is called without parenthesis
console.log(person.Name); //getName function is called without parenthesis