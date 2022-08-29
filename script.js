let plays = ["Rock", "Scissors", "Paper"];

function getComputerChoice(){
    let randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber = Math.floor(randomNumber);
    return plays[randomNumber];
}
