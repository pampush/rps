/*
        COMPUTER
        R P S 
User  R t l w
      P w t l
      S l w t 
*/ 

/**
 * Game result objects (associative arrays) 
 */
let win = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
  showWin (playerSelection, computerSelection) {
    console.log(`You win. ${playerSelection} beats ${computerSelection}`);
  }
};

let lose = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
  showLose (playerSelection, computerSelection) {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
  }
}

let tie = {
  rock = "rock",
  paper: "paper",
  scissors: "scissors",
  showTie (playerSelection, computerSelection) {
    console.log(`It's a tie. ${playerSelection} is equal to ${computerSelection}`);
  }
}

/**
 * Generate random turn
 * @returns {string} rock/paper/scissors
 */
function computerPlay() {
  let num = Math.floor(Math.random() * 3); 
  let arr = ['rock', 'paper', 'scissors'];
  return arr[num];
}

/**
 * Game logic implementation and output 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 */
function playRound (playerSelection, computerSelection) {
  if(win[playerSelection] == computerSelection)
    win.showWin(playerSelection, computerSelection);

  else if(lose[playerSelection] == computerSelection)
    lose.showLose(playerSelection, computerSelection);

  else 
    tie.showTie(playerSelection, computerSelection);
}

/**
 * main function for 5 rounds 
 */
function game() {
  for(let i = 0; i < 5; i++) {
    const  playerTurn = prompt();
    const  computerTurn = computerPlay();
    result = playRound(playerTurn, computerTurn);
  }
}

/**
 * Start game
 */
game();

