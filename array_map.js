//doing specific operation on all elements of array
//return modified array
//three parameters - element itself, index of element, whole array
//only first parameter is obliged

let arr = [1, 2, 3];

let modifed = arr.map((element, index, arr) => {
    return element * 10;
});

console.log(modifed);

//minified version, it works too (you dont need brackets beacuse its single element and single line of code)
let modified2 = arr.map(element => element * 10);
console.log(modified2);