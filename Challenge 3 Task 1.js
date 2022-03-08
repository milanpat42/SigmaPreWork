const prompt = require("prompt-sync")();

//Task 1
//var n = parseInt(prompt('Please enter a number:'));
//if (isNaN(n)) {
//console.log(`Unexpected input! Please ente a valid number.`)
//} else console.log('Thanks')

//Task 2
//var n = parseInt(prompt('Please enter a number that is divisible by 5 or 3:'));
//if ((isNaN(n)) || (n % 5 !== 0 || n % 3 !== 0)) {
//console.log(`Unexpected input! Please enter a valid number.`)
//} else console.log('Your number is good');

function prodorsum() {
    var n = parseInt(prompt('Please enter a number: '));
    if (isNaN(n)) {
        console.log(`Unexpected input! Please enter a valid number.`)
        prodorsum()
    } else {
        console.log('Your number is good');
    }
    var pors = prompt('Enter "p" or "s" if you want to find the product of the number or the sum: ').toLowerCase();
    if (pors === 'p') {
        product(n);
    } else if (pors === 's') {
        sum(n);
    }
}
//function in fucjtion not just ask for 2 input (line 24)
function product(n) {
    let p = 1
    for (j = 1; j <= n; j++) {
        p *= j;
    }
    return console.log(`The product of your number between 1 and n is: ${p}`)
}
function sum(n) {
    s = 0
    for (k = 0; k <= n; k++) {
        s += k
    }
    return console.log(`The sum of your number between 1 and n is: ${s}`)
}
prodorsum()
