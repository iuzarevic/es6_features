//Map stores key:value pairs
//difference to array - we can define our own index
//indexes in maps are unique

var newMap = new Map();
newMap.set('name', 'Ivan'); 
newMap.set('id', 123);
newMap.set('drinks', ['rakija', 'pivo', 'bazga']);
newMap.set(NaN, 'No value'); //beacuse indexes are unique

let name = newMap.get('name'); // Ivan
let id = newMap.get('id'); // 123
let drinks = newMap.get('drinks'); // ['1', '2', '3']
let nan = newMap.get(NaN); //No value

console.log(name); // Ivan
console.log(id); // 123
console.log(drinks); // ['1', '2', '3']
console.log(nan); //No value