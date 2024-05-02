// BY ID
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// BY CLASS
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";

for(let fruit of fruits){
    fruit.style.backgroundColor = "green";
}

Array.from(fruits).forEach(fruit =>{
    fruit.style.color = "red";
});

// BY TAG
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");


for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "cyan"
}

Array.from(liElements).forEach(liElement =>{
    liElement.style.backgroundColor = "pink"
});

// QUERY returns first element
const element1 = document.querySelector(".fruits");
element1.style.backgroundColor = "grey";
const element2 = document.querySelector("li");
element2.style.backgroundColor = "grey";

// QUERY all return all elemetns

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.color = "blue";
});

