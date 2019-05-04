// let has scope. 
// let is only accessible in the block level it is defined
if(true) {
    let a = 10;
    console.log(a); //this will be 10
}
console.log(a); //this will be undefined