//it returns value not index in array when looping
let arr = [3, 1, 2];
for (let value of arr) {
    console.log(value);
}

//it returns index in array when looping
for (let index in arr) {
    console.log(index);
}