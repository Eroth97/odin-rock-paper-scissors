// Create the scores
let playerPunct = 0;
let compPunct = 0;

// Create the divs that contain the whole place where we work, 
// the scores holder and the results holder.
const playSpace = document.querySelector('.play-space');

const div = document.createElement('div');
div.textContent = 'Press a button to choose your attack';
playSpace.insertAdjacentElement('afterbegin', div);

const scores = document.createElement('div');
scores.style.gap = '10px';
scores.style.marginBottom = '10px';
playSpace.insertAdjacentElement('afterbegin', scores);

const playerScore  = document.createElement('div');
playerScore.style.margin = '10px';
playerScore.textContent = 'Your score is: 0';
scores.appendChild(playerScore);

const compScore = document.createElement('div');
compScore.style.margin = '10px';
compScore.textContent = 'Computer score is: 0';
scores.appendChild(compScore);


//Add events listeners.
const rockButton  = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    div.textContent = playRound('rock', compPlay);
})

const scissorsButton  = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    div.textContent = playRound('scissors', compPlay);
})

const paperButton  = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    div.textContent = playRound('paper', compPlay);
})




function getComputerChoice(){
    const PLAYS = ['rock', 'scissors', 'paper'];
    let randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber = Math.floor(randomNumber);
    return PLAYS[randomNumber];
}

//This function plays a round, updates scores, changes the DOM 
//of our scores divs, returns the result and returns a result!
//You must simplify it!
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'It\'s a tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compPunct++;
        compScore.textContent = 'Computer score is: ' + compPunct;
        deactivateButtons();
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerPunct++;
        playerScore.textContent = 'Your score is: ' + playerPunct;
        deactivateButtons();
        return 'You win! Rock beats scissors';
    }    
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerPunct++;
        playerScore.textContent = 'Your score is: ' + playerPunct;
        deactivateButtons();
        return 'You win! Paper beats rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compPunct++;
        compScore.textContent = 'Computer score is: ' + compPunct;
        deactivateButtons();
        return 'You lose! Scissors beats Paper'; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compPunct++;
        compScore.textContent = 'Computer score is: ' + compPunct;
        deactivateButtons();
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
         playerPunct++;
         playerScore.textContent = 'Your score is: ' + playerPunct;
         deactivateButtons();
         return 'You win! Scissors beats paper';
    }
}

//This function creates a new DOM element with the final result
//and deactivate the buttons.
function deactivateButtons(){
    if (playerPunct === 5){
        const result = document.createElement('div');
        result.style.marginBottom = '10px';
        result.textContent = 'YOU ARE THE WINNER 🎈🎈';
        playSpace.appendChild(result);
        
        const buttons = document.querySelectorAll('button');
        buttons.forEach(element => {
            element.disabled = true;
        });

        tryAgain();
    } else if (compPunct === 5){
        const result = document.createElement('div');
        result.style.marginBottom = '10px';
        result.textContent = 'You have lost 😥😥';
        playSpace.appendChild(result);

        const buttons = document.querySelectorAll('button');
        buttons.forEach(element => {
            element.disabled = true;
        });
        tryAgain();
    }
}

//This function creates the try again button and its functionality.
function tryAgain(){
    const rechargeButton = document.createElement('button');
    rechargeButton.textContent = 'Try Again';
    playSpace.appendChild(rechargeButton);

    rechargeButton.addEventListener('click', () =>{
    window.location.reload();   
    })

}

//This functions has only nostalgic value.
function game(userPlay){
    let playerPunct = 0;
    let compPunct = 0;

    for(let i = 0; i < 5; i++){
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

