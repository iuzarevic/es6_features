//used to aggregate all the elements of an array and return a single value
//first parameter is used as aggregator, initial value is defined as 0 in this case (second parameter in reduce function, first is callback function)
//taht means when first time callbavk function is valled initial value of variable total will be 0
//second, third and foruth parameter are same as in map and filter case
//the first two parameters are mandatory
let arr = [1, 2, 3, 4]
let total = arr.reduce((total, element, index, array) => {
    return total + element;
}, 0);
console.log(total);

let total2 = arr.reduce((sum, element) => element + sum, 10);
console.log(total2);