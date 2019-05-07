//used to make async operations (operations which take some time to complete)
//if you have a function that makes an request to the server, it doesn't return result immediately
//if you assign that result to some variable, it will be undefined
//callbacks (before promises) - normal functions in Javascript which executes when the async operation is complete

//Promises are objects that helps to do async operations (actually they define completion of the async operation)
/*
3 states of promises: 
- pending (promise is just executing the async operation)
- fulfilled (async operation is complete and we have the result)
- rejected (async operation is not complete and we have the error) 
*/

//promise is defined by new keyword, constructor will have a function as parameter (aka executor function) with 2 parameters - resolve and reject
//resolve - it is a function, promise is moving from pending to fulfilled state
//reject - it is also a function, promise is moving from pending to rejected state
const https = require('https');
var params = {
    host: 'randomuser.me',
    port: 443,
    method: 'GET',
    path: '/api',
    headers: {
        "User-Agent": "promises" //it can be anything, name of your app for example
    }
};

var apicall = new Promise(function (resolve, reject) {
    var req = https.request(params, (res) => {
        console.log(`Status code: ${res.statusCode}`)
        if (res.statusCode == 200) {
            var data = [];
            res.on('data', (d) => {
                data.push(d);
            })
            res.on('end', function () {
                try {
                    data = Buffer.concat(data).toString();
                } catch (e) {
                    reject(e);
                }
                resolve(data);
            });
        } else {
            reject(res.statusCode);
        }
    })
    req.on('error', (error) => {
        reject(error);
    })
    req.end();
});

//how to process the response or error??? -> using handlers (they are functions which are executed when some event occurs)
//how to call promise with handlers:
apicall
    .then(function (x) {
        console.log(x);
    })
    .catch(function (x) {
        console.log(x);
    })