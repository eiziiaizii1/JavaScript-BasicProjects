//console.log("Console Message");
//window.alert("ALERTT!!!!!!")
//`
//document.getElementById("myH1").textContent = 'Hello';
//document.getElementById("myP").textContent = 'Im sad'


/*let name = "Usman";
let age = 31;
let isStudent = false;

document.getElementById("p1").textContent = `name ${name}`;
document.getElementById("p2").textContent = `age ${age}`;
document.getElementById("p3").textContent = `is student? ${isStudent}`;*/


/*let studens = 30;

//studens = studens ** 2;
studens **= 2;
console.log(studens);*/

//  --USER INPUT--
//let userName = window.prompt("What is your username?");
//console.log(userName);
/*let userName;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`
}
    <h1 id="myH1">Welcome</h1>31

    <label>username</label>
    <input id="myText">
    <button id="mySubmit">Submit</button> */


/*    
let age = window.prompt("How old r u?");
age= Number(age);
age = age + 1;
console.log(age, typeof age);

let x = "kebap";
let y = "";

console.log(Boolean(x), typeof Boolean(x));
console.log(Boolean(y), typeof Boolean(y));
console.log(Number(x), typeof Number(x));
*/

/*
const PI = 3.14
let radius;
let circumf;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumf = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumf + "cm";
}
<h1 id="myH1">Enter the radius of circle:</h1>

<label>radius</label>
<input type="text" id="myText"> <br><br>
<button id="mySubmit">Submit</button>
<h3 id="myH3" >Circumference</h3>
*/


//COUNTER:

const dButton = document.getElementById("decreaseButton");
const rButton = document.getElementById("resetButton");
const iButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");
let count = 0;

iButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

dButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}

rButton.onclick = function(){
    count=0;
    countLabel.textContent = count;
}