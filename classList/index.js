const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
//myButton.classList.remove("enabled")

/*
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseleave", event => {
    event.target.classList.remove("hover");
});
*/

myButton.addEventListener("click", event=>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += ">:("
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
    
});

//--------------------------------------------------------------------

const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");

myH1.addEventListener("click", event=>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += ">:("
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
    
});

//--------------------------------------------------------------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled")
})

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    })
});
buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += ">:( "
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    })
})
