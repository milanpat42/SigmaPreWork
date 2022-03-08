let greeting;
let name = prompt("What is your name?");
switch(name){
  case 'Alice':
    text = 'Hello, ALice!';
    break;
  case 'Bob':
    text = 'Hello, Bob!';
    break;
  default:
    text = `Nice to meet you, ${name}!`;
    
}
console.log(text);