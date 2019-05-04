//arrow1.js with parameters and default parameters
let someFunction = (a, b) => {
    console.log(a + b); //30
}

let someDefaultFunction = (a, b = 10) => {
    console.log(a + b);
}

let defaultNotWorking = (a = 10, b) => {
    console.log(a + b);
}

someFunction(10, 20); //returns 30
someDefaultFunction(20); //returns 30
someDefaultFunction(20, 20); //returns 40
defaultNotWorking(20); //you need to respect order of parameters, b is not defined so it will not gonna work
defaultNotWorking(20,20); //this will work too like someDefaultFunction