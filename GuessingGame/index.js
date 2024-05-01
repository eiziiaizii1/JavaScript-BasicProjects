const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let atttemps = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt("Guess a number between " + minNum + " - " + maxNum);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("PLEASE ENTER A NUMBER!!!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("PLEASE ENTER A VALID NUMBER!!!");
    }
    else{
        atttemps++;
        if(guess < answer){
            window.alert("Too low try again");
        }
        else if(guess > answer){
            window.alert("Too high try again");
        }else{
            window.alert("CORRECT! Answer is indeed " + answer + "\nAttemps: "+ atttemps);
            running = false;
        }
    }
}