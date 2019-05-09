//filter whole array based on a condition, element need to pass condition to stay in array
//only first parameter is obliged
let arr = [1, 2, 3, 4];
let modified = arr.filter((element, index, array) => element%2 == 0);
console.log(modified);   