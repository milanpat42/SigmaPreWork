var n = Math.floor(Math.random() * 10000);
var nArray = [];
var revArray = [];
console.log(n)
function digitize(n) {
    nArray = n.toString().split("");
    newArray = nArray.map(Number);
    revArray = newArray.reverse();
    return revArray;
}
console.log(digitize(n));