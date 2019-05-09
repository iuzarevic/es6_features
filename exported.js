//this example is not working in node.js beacuse they are in expermiental phase
//to run this code in node you can check this link https://nodejs.org/api/esm.html
//TLDR above link -> replace extension .js with .mjs nad run node file with --experimental-modules flag 
//example: node --experimental-modules ./file.js
let first= 10;
let second = 2;
let sum = () => first+second;

export {first,second}
export default sum