//this example is not working in node.js beacuse they are in expermiental phase
//to run this code in node you can check this link https://nodejs.org/api/esm.html
//TLDR above link -> replace extension .js with .mjs nad run node file with --experimental-modules flag 
//example: node --experimental-modules ./file.js
import * as numbers from "./exported.js";
import iwantsum from "./exported.js";
//Exports are used in modules for exporting some variables or functions or classes and they can be used in other moudles
//Imports are used to import variable, functions, classes from other modules
//you can see this feature in many front-end framewroks based on javascript or typescript

//here is better technical explanation of this features:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

console.log(numbers.first);
console.log(numbers.second);
console.log(iwantsum());