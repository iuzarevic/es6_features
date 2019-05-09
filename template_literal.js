//syntax for easier adding expression
//be aware of type of quotation marks we use
//it works with multi-string too
let name = "Ivan";
let message = `My name is ${name}`;
console.log(message);
console.log();

//another example with arrow functionand multi-strings
let drinks = () => "Rakija, Pivo, Bazga";
let message2 = `${message}.
My favourite drinks are ${drinks()}.`;
console.log(message2);