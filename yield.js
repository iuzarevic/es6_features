//generator functions, a special variant of functions where the control flow can be paused and resumed
//yield pauses control flow then resume it after next call of fucntion, see example bellow with fibbonaci numbers
function* fibbo() {
    let temp = 0;
    let first = 0;
    let second = 1;
    while(true) {
        yield first;
        temp = first;
        first = second;
        second = second + temp;
    }
}

var generator = fibbo();
for (let i = 0; i < 10; i++) {
    console.log(generator.next());
}