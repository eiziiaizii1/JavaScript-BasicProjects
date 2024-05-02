 // First child element
 const element = document.getElementById("fruits");
 const child1 = element.firstElementChild;
 child1.style.backgroundColor = "yellow";

 const ulElements = document.querySelectorAll("ul");

 ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.color = "red";
 });

// Last child element
const childLast = element.lastElementChild;
childLast.style.backgroundColor = "yellow";

 ulElements.forEach(ulElement =>{
    const lastChild = ulElement.lastElementChild;
    lastChild.style.color = "blue";
 });

 // Sibling
 const veg = document.getElementById("carrot");
 const nextSibling = veg.nextElementSibling;
 nextSibling.style.backgroundColor = "green";

 const dessert = document.getElementById("pie");
 const prevSibling = dessert.previousElementSibling;
 prevSibling.style.backgroundColor = "cyan";

 // Parent
 const a = document.getElementById("pie");
 const parent = a.parentElement;
 parent.style.fontWeight = "bold";

 // Children
const n = document.getElementById("vegetables");
const childrenVeg = n.children;
childrenVeg[2].style.backgroundColor = "red";