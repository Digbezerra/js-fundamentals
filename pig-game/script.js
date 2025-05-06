'use strict';

const players = document.querySelectorAll('.player');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const playerZeroName = document.getElementById('name--0');
const playerOneName = document.getElementById('name--1');
const scorePlayerZeroSelector = document.getElementById('score--0');
const scorePlayerOneSelector = document.getElementById('score--1');
const currentScoreZero = document.getElementById('current--0');
const currentScoreOne = document.getElementById('current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let diceNumber = 1;
let actualScoreSum = 0;
let scorePlayerZero = 0;
let scorePlayerOne = 0;

const rollDice = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `http://127.0.0.1:5501/pig-game/dice-${randomNumber}.png`;
  if (randomNumber === 1) {
    changePlayer();
    actualScoreSum = 0;
    return false;
  }
  diceNumber = randomNumber;
  actualScoreSum += diceNumber;
  scoreCounter();
  return diceNumber;
};

const holdScore = function () {
  if (playerZero.classList.contains('player--active')) {
    scorePlayerZero += actualScoreSum;
    scorePlayerZeroSelector.textContent = scorePlayerZero;
    actualScoreSum = 0;
    scorePlayerZero >= 100 ? winGame(playerZeroName) : changePlayer();
    return 1;
  }
  if (playerOne.classList.contains('player--active')) {
    scorePlayerOne += actualScoreSum;
    scorePlayerOneSelector.textContent = scorePlayerOne;
    actualScoreSum = 0;
    scorePlayerOne >= 100 ? winGame(playerOneName) : changePlayer();
    return 2;
  }
};

const scoreCounter = function () {
  const players = document.querySelectorAll('.player');
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      document.getElementById(`current--${i}`).textContent = actualScoreSum;
    }
  }
};

const changePlayer = function () {
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
  currentScoreZero.textContent = 0;
  currentScoreOne.textContent = 0;
};

const winGame = function (playerElement) {
  playerElement.textContent = 'Você venceu!';
  btnRoll.style;
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);

//Divide to conquer

// - USER ROLLS DICE BY BUTTON ok
// - Generate random dice roll ok
// - Display dice roll ok
// - is it 1? ok
// Yes: Switch Player ok
// No: Add dice roll to current score -> display new score ok

// - USER HOLDS SCORE
// - add current score to total score ok
// - score >= 100?
// Yes: Current player wins! ok
// No: Switch Player ok

// - USER RESETS GAME
// - Set all scores to 0
// - Set Player 1 as starting player
