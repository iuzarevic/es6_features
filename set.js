//Sets are used to store the unique values of any type
var sets = new Set();
sets.add(1);
sets.add(2);
sets.add(2); // duplicate value !!!
for (let element of sets) {
    console.log(element);
}

//useful methods
console.log();
console.log(sets.size); //returns 2, size of set
console.log(sets.has(1)); //true
console.log(sets.has(3)); //false