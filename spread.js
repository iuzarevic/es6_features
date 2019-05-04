//spread attribute (aka ...object) can convert elements to array and vice versa

let sumit = (...arr) => {
    console.log(arr); // [10, 20, 30]
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    console.log(sum); // 60
}
sumit(10, 20, 30); // we are passing arguments, not array

let arr = [10, 20, 30];
let max = Math.max(...arr);
console.log(max); // 30