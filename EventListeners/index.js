const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn")

/*
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCHH >:|"
}
*/

/*
myBox.addEventListener("click",function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCHH >:|"
});
*/

/*
myBox.addEventListener("click",event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCHH >:|"
});

myBox.addEventListener("mouseover",event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "You sure? :/"
});

myBox.addEventListener("mouseout",event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me :D"
});
*/

myBtn.addEventListener("click",event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCHH >:|"
});

myBtn.addEventListener("mouseover",event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "You sure? :/"
});

myBtn.addEventListener("mouseout",event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me :D"
});
