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

const results = document.createElement('div');
results.style.flexDirection = 'column';
playSpace.appendChild(results);

const endResult = document.createElement('div');
endResult.style.marginTop = '4px';
endResult.style.marginBottom = '10px';
endResult.style.flexDirection = 'column';
endResult.style.gap = '4px';



//Add events listeners.
const rockButton  = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    let result = playRound('rock', compPlay);
    addResults(result);
})

const scissorsButton  = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    let result = playRound('scissors', compPlay);
    addResults(result);
})

const paperButton  = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    let compPlay = getComputerChoice();
    let result = playRound('paper', compPlay);
    addResults(result);
})




function getComputerChoice(){
    const PLAYS = ['rock', 'scissors', 'paper'];
    let randomNumber = Math.random();
    randomNumber *= 3;
    randomNumber = Math.floor(randomNumber);
    return PLAYS[randomNumber];
}

//This function plays a round and return the result.
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'It\'s a tie!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        lose();
        lookScores();
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        win();
        lookScores();
        return 'You win! Rock beats scissors';
    }    
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        win();
        lookScores();
        return 'You win! Paper beats rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        lose();
        lookScores();
        return 'You lose! Scissors beats Paper'; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        lose();
        lookScores();
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
         win();
         lookScores();
         return 'You win! Scissors beats paper';
    }
}

//This functions update scores and change the DOM when you lose or win.
function lose(){
    compPunct++;
    compScore.textContent = 'Computer score is: ' + compPunct;
}

function win(){
    playerPunct++;
    playerScore.textContent = 'Your score is: ' + playerPunct;    
}

//This function adds the results to the DOM.
function addResults(result){
    let resultP = document.createElement('p');
    resultP.style.margin = '4px';
    resultP.textContent = result;
    results.appendChild(resultP);
}


//This function changes DOM with the final result.
function lookScores(){
    if (playerPunct === 5){
        endResult.textContent = 'YOU ARE THE WINNER 🎈🎈';
        playSpace.insertAdjacentElement('afterbegin', endResult);

        deactivateButtons();
    } else if (compPunct === 5){
        endResult.textContent = 'You have lost 😥😥';
        playSpace.insertAdjacentElement('afterbegin', endResult);

        deactivateButtons();
    }
}

//This function deactivate the buttons.
function deactivateButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.disabled = true;
    });

    tryAgain();
}

//This function creates the try again button and its functionality.
function tryAgain(){
    const rechargeButton = document.createElement('button');
    rechargeButton.classList.add('rt-button');
    rechargeButton.style.marginTop = '4px';
    rechargeButton.textContent = 'Play Again';
    endResult.appendChild(rechargeButton);

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

