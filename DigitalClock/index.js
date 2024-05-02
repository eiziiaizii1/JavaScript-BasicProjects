//`
function updateClock(){
    const currentTime = new Date();
    let hours =currentTime.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = currentTime.getHours().toString().padStart(2,0);
    const minutes = currentTime.getMinutes().toString().padStart(2,0);;
    const seconds = currentTime.getSeconds().toString().padStart(2,0);;

    const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeStr;
}

updateClock();

// Calls a function repeatedly
setInterval(updateClock,1000);