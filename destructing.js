//simple example with destructing
let person = { firstName: "Ivan", gender: "male", age: 23 };
const { firstName: name, gender, age } = person;

console.log(name);
console.log(gender);
console.log(age);

//example with destructing array
let arr = [1, 2, 3];
const [a, , b] = arr; //we skipped second element of array
console.log(a); //1
console.log(b); //3

//example with function (using object in first example as parameter but using destruction in function definition)
let introduction = ({firstName: name, age}) => {
    console.log(`My name is ${name} and I'am ${age} years old`);
}

introduction(person); //