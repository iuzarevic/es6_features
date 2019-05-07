//async keywoard - function will return only promises
async function compare(a, b) {
    if (a < b) {
        return "a is not big as b"; //here you can use Promise.resolve instead
    }
    else {
        return Promise.reject("a is bis as b"); //you can use throw new Error("some error") instead
    }
}

compare(14, 10)
    .then(function (x) {
        console.log("Result: " + x.toString());
    })
    .catch(function (x) {
        console.log("Ops: " + x.toString());
    })
