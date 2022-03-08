const { maxHeaderSize } = require("http");

const prompt = require("prompt-sync")();

var newName = "";
var intName = "";
var name;

function reverseName() {
  name = prompt("Please enter your name:").toLowerCase();
  for (i = name.length - 1; i >= 0; i--) {
    newName += name[i];
  }
  return console.log(newName);
}
reverseName();
function interperseName() {
  surname = prompt("Please enter your surname:").toLowerCase();
  var smallerCount = Math.min(name.length, surname.length);
  for (j = 0; j < smallerCount; j++) {
    intName += newName[j] + surname[j];
  }
  if (surname.length < name.length) {
    intName += newName.slice(j);
  } else {
    intName += surname.slice(j);
  }
  return console.log(intName);
}
interperseName();

function formatName() {
  firstName = intName.slice(0, Math.ceil(intName.length / 2));
  secondName = intName.slice(Math.ceil(intName.length / 2), intName.length);
  return console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + secondName.charAt(0).toUpperCase() + secondName.slice(1));
}
formatName()
