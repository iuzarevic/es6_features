//wait till the operation is done
//can be used only inside async function
function getResponse() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Executed after 3 seconds");
        }, 3000);
    });
}

async function main() {
    let response = await getResponse();
    return response;
}

main()
    .then(function (x) {
        console.log(x);
    })
    .catch(function (x) {
        console.log(x);
    });
console.log("Executed before gerResponse()"); //this is executed before getResponse() becasuse main() is asnyc function and waits for response