function getComputerChoice(){
    const PLAYS = ["Rock", "Scissors", "Paper"];
    let randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber = Math.floor(randomNumber);
    return plays[randomNumber];
}

function rpsRound(playerSelection, computerSelection){
    let playerSelectionL = playerSelection.toLowerCase().trim();
    let computerSelectionL = computerSelection.toLowerCase().trim();
    if (playerSelectionL === computerSelectionL){
        console.log("It's a tie!");
    }
    else if (playerSelectionL === 'rock' && computerSelectionL === 'paper'){
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelectionL === 'rock' && computerSelectionL === 'scissors'){
        return 'You win! Rock beats scissors';
    }    
    else if (playerSelectionL === 'paper' && computerSelectionL === 'rock'){
        return 'You win! Paper beats rock';
    }
    else if (playerSelectionL === 'paper' && computerSelectionL === 'scissors'){
        return 'You lose! Scissors beats Paper'; 
    }
    else if (playerSelectionL === 'scissors' && computerSelectionL === 'rock'){
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelectionL === 'scissors' && computerSelectionL === 'paper'){
         return 'You win! Scissors beats paper';
    }
}
