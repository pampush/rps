/* 0-win, 1-lose, 2-tie */
let logic = {
  rock: ['scissors', 'paper', 'rock'],
  paper: ['rock', 'scissors', 'paper'],
  scissors: ['paper','rock','scissors'],
  result: {0: 'win', 1: 'lose', 2: 'tie'},
  roundRes (playerSelection, computerSelection) {
    let res = logic[playerSelection].indexOf(computerSelection);
    return this.result[res];
  }
} 
/**
 * 
 */
let gameScore = { 
  compScore: 0,
  playerScore: 0, 
  
  win (elem) { 
    this.playerScore++; 
    
    elem.style.cssText = 'box-shadow: .5rem .5rem 5rem rgba(8, 250, 0, 0.8)';
    let scoreBlock = document.querySelector('.score__result');
    let scoreBox = document.querySelector('.score__box-player');
    scoreBox.textContent = this.playerScore; 
    scoreBlock.textContent = "win";
  },

  lose (elem) { 
    this.compScore++;

    elem.style.cssText = 'box-shadow: .5rem .5rem 5rem rgba(255, 20, 20, 0.8)';
    let scoreBlock= document.querySelector('.score__result');
    let scoreBox = document.querySelector('.score__box-comp');
    scoreBox.textContent = this.compScore; 
    scoreBlock.textContent = "lose";
  },

  tie (elem) { 
    elem.style.cssText = 'box-shadow: .5rem .5rem 5rem rgba(230, 255, 1, 0.8);';
    let scoreBlock= document.querySelector('.score__result');
    scoreBlock.textContent = "tie";    
  },

}
/**
 * Generates random turn
 * @returns {string} rock/paper/scissors
 */
function computerPlay() {
  let num = Math.floor(Math.random() * 3); 
  let arr = ['rock', 'paper', 'scissors'];
  let comp = document.querySelector('.comp__play');
  comp.style.cssText=`background: center/contain no-repeat url("./static/img/${arr[num]}.png"), linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5));`
  comp.innerHTML = `<span>${arr[num]}</span>`;
  return arr[num];
}

/**
 * Game logic implementation and output 
 *   
 */
function endGame () {
  let fin = (gameScore.playerScore == 5) ? 'You won' : (gameScore.compScore == 5) ? 'Computer won' : null;
  if (fin) {
    let scoreBlock = document.querySelector('.score__result'); 
    scoreBlock.textContent = fin;
  }
} 

function playRound (elem) {
  
  this.classList.toggle('turn__item-clicked');
  let computerSelection = computerPlay();
  let res = logic.roundRes(this.textContent, computerSelection); 
  gameScore[res](event.currentTarget);

  let closure = function(elem) { // to pass argument (element) in settimeout
    return function() {
      elem.style.cssText = " ";
    }
  }
  let time = setTimeout(closure(this), 500);
  endGame();
}

/**
 * 
 */
function removeTransition() {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('turn__item-clicked'); // or event.target.classList.remove("playing")    
}

const plSelect = document.querySelectorAll('.pl__container .turn__item'); 
plSelect.forEach(elem => elem.addEventListener('click', playRound));

plSelect.forEach(elem => elem.addEventListener("transitionend", removeTransition));
