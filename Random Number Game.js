function guess() {
    var n = parseInt(prompt('Please guess a number between 0 and 10:'));
    feedback(n)
    if (n === secretNumber) {
        return
    } else if (!guesses.includes(n)) {
        guesses.push(n);
        console.log(`The guesses that have already been made: ${guesses}`);
    } else {
        console.log('This guess has already been made. Guess again!');
    }
    guess()
}
function feedback(a) {
    console.log(`The number of guesses you have made: ${guesses.length}`);
    if (a < secretNumber) {
        console.log('Your number is lower than the secret number!');
    } else if (a > secretNumber) {
        console.log('Your number is higher than the secret number!');
    } else {
        console.log('You did it!')
    }
}
const prompt = require("prompt-sync")();

var secretNumber = Math.floor(Math.random() * 10);
var guesses = [];
console.log(`!!!!! ${secretNumber}`)

guess();
