function getComputerChoice(){
    const PLAYS = ["Rock", "Scissors", "Paper"];
    let randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber = Math.floor(randomNumber);
    return PLAYS[randomNumber];
}

function playRound(playerSelection, computerSelection){
    let playerSelectionL = playerSelection.toLowerCase().trim();
    let computerSelectionL = computerSelection.toLowerCase().trim();
    if (playerSelectionL === computerSelectionL){
        return "It's a tie!";
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

function game(){
    let playerPunct = 0;
    let compPunct = 0;

    for(let i = 0; i < 5; i++){
        let userPlay = prompt("What do you choose? ");
        let compPlay = getComputerChoice();
        let result = playRound(userPlay, compPlay);

        if(result.startsWith('You win') === true){
            playerPunct++;
        } else if (result.startsWith('You lose') === true){
            compPunct++;
        } 
        console.log(result);
    }

    if (playerPunct < compPunct){
        console.log('You lose. I\'m sorry');
    } else if (compPunct < playerPunct){
        console.log('Congratulations! You win!');
    }
    else{
        console.log('It is a tie.')
    }
}

game();