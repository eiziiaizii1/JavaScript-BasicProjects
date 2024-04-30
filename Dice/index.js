//random number generator

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;

let randNum;

myButton.onclick = function() {
    randNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randNum;
}