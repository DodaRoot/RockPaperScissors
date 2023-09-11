// Global Variables
let playerCard = document.getElementById('playerCard')
let computerCard = document.getElementById('computerCard')
let cardRock = document.getElementById('card-rock')
let cardPaper = document.getElementById('card-paper')
let cardScissors = document.getElementById('card-scissors')
let gameRound = document.getElementById('GameRound')
let winCount = document.getElementById('WinCount')
let playScore = document.getElementById('you')
let compScore = document.getElementById('computer')
let gameOver = document.getElementById('gameOver')
let playAgain = document.getElementById('play-again')
let choise = '';
let compGuess = '';
let Round = 0
let pScore = 0;
let cScore = 0;

// Displaying the rounds
// Getting the player choise
cardRock.addEventListener('click', () => {
    choise = 'rock';
    round();
    Round = Round + 1;
    gameRound.innerHTML = `This is round ${Round}`;
});

cardPaper.addEventListener('click', () => {
    choise = 'paper';
    round();
    Round = Round + 1;
    gameRound.innerHTML = `This is round ${Round}`;
});

cardScissors.addEventListener('click', () => {
    choise = 'scissors';
    round();
    Round = Round + 1;
    gameRound.innerHTML = `This is round ${Round}`;
});

// console.log(choise)

// Making the round function
function round () {

    // Getting a random number
    let randomNum = Math.floor(Math.random() * 3) + 1;

    // Computer choses play 
    switch(randomNum) {
        case 1
        :compGuess = "Rock";
        break
        case 2 
        :compGuess = "Paper";
        break
        case 3
        :compGuess = "Scissors";
        break
    }    

    compGuess = compGuess.toLowerCase();
    choise = choise.toLowerCase();

    console.log(`Computer chose ${compGuess}`);
    console.log(`Player chose ${choise}`);

        // If player chose rock

        if (choise == 'rock') {
            if (compGuess == 'rock'){
                console.log('Draw - both chose rock')
                winCount.innerHTML = 'Draw - both chose rock';
                playerCard.style.background = 'center url(images/rock.jpeg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/rock.jpeg)';
                computerCard.style.backgroundSize = 'contain';
            }
            else if (compGuess == 'paper') {
                console.log('Computer Wins - paper beats rock')
                winCount.innerHTML = 'Computer Wins - paper beats rock';
                playerCard.style.background = 'center url(images/rock.jpeg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/paper.png)';
                computerCard.style.backgroundSize = 'contain';
                //
                cScore = cScore + 1;
                compScore.innerHTML = `Computer = ${cScore}`;
            }
            else if (compGuess == 'scissors') {
                console.log('Player Wins - rock beats scissors')
                winCount.innerHTML = 'Player Wins - rock beats scissors';
                playerCard.style.background = 'center url(images/rock.jpeg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/scissors.jpg)';
                computerCard.style.backgroundSize = 'contain';
                //
                pScore = pScore + 1;
                playScore.innerHTML = `You = ${pScore}`;
            }
        }
    
        // If player chose paper
    
        else if (choise == 'paper') {
            if (compGuess == 'paper'){
                console.log('Draw - both chose paper')
                winCount.innerHTML = 'Draw - both chose paper';
                playerCard.style.background = 'center url(images/paper.png)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/paper.png)';
                computerCard.style.backgroundSize = 'contain';
            }
            else if (compGuess == 'rock') {
                console.log('Player Wins - paper beats rock')
                winCount.innerHTML = 'Player Wins - paper beats rock';
                playerCard.style.background = 'center url(images/paper.png)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/rock.jpeg)';
                computerCard.style.backgroundSize = 'contain';
                //
                pScore = pScore + 1;
                playScore.innerHTML = `You = ${pScore}`;
            }
            else if (compGuess == 'scissors') {
                console.log('Computer Wins - scissors beat paper')
                winCount.innerHTML = 'Computer Wins - scissors beat paper';
                playerCard.style.background = 'center url(images/paper.png)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/scissors.jpg)';
                computerCard.style.backgroundSize = 'contain';
                //
                cScore = cScore + 1;
                compScore.innerHTML = `Computer = ${cScore}`;
            }
        }
    
        // If player chose scissors
    
        else if (choise == 'scissors') {
            if (compGuess == 'scissors'){
                console.log('Draw - both chose scissors')
                winCount.innerHTML = 'Draw - both chose scissors';
                playerCard.style.background = 'center url(images/scissors.jpg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/scissors.jpg)';
                computerCard.style.backgroundSize = 'contain';
            }
            else if (compGuess == 'rock') {
                console.log('Computer Wins - rock beats scissors')
                winCount.innerHTML = 'Computer Wins - rock beats scissors';
                playerCard.style.background = 'center url(images/scissors.jpg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/rock.jpeg)';
                computerCard.style.backgroundSize = 'contain';
                //
                cScore = cScore + 1;
                compScore.innerHTML = `Computer = ${cScore}`;
            }
            else if (compGuess == 'paper') {
                console.log('Player Wins - scissors beat paper')
                winCount.innerHTML = 'Player Wins - scissors beat paper';
                playerCard.style.background = 'center url(images/scissors.jpg)';
                playerCard.style.backgroundSize = 'contain';
                computerCard.style.background = 'center url(images/paper.png)';
                computerCard.style.backgroundSize = 'contain';
                //
                pScore = pScore + 1;
                playScore.innerHTML = `You = ${pScore}`;
            }  
        }
        
        // If nothing else works at all
        else {
            console.log('Something went wrong')
        }

        if (pScore > 4) {
            console.log('Game Over');
            gameOver.innerHTML = 'Game Over Player Wins';
            round = null;
            playAgain.style.visibility = "unset"
        }
        else if  (cScore > 4) {
            console.log('Game Over');
            gameOver.innerHTML = 'Game Over Computer Wins';
            round = null;
            playAgain.style.visibility = "unset"
        }        
}    