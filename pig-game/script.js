'use strict';

const players = document.querySelectorAll('.player');
const namePlayerZero = document.getElementById('name--0');
const namePlayerOne = document.getElementById('name--1');
const scorePlayerZero = document.getElementById('score--0');
const scorePlayerOne = document.getElementById('score--1');

// const currentScoreZero = document.getElementById('current--0');
// const currentScoreOne = document.getElementById('current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let diceNumber = 1;
let actualScoreSum = 0;

const rollDice = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `http://127.0.0.1:5501/pig-game/dice-${randomNumber}.png`;
  diceNumber = randomNumber;
  actualScoreSum += diceNumber;
  scoreCounter();
  return diceNumber;
};

const scoreCounter = function () {
  const activePlayer = document.querySelectorAll('.player');
  for (let i = 0; i < activePlayer.length; i++) {
    if (activePlayer[i].classList.contains('player--active')) {
      document.getElementById(`current--${i}`).textContent = actualScoreSum;
    }
  }
};

btnRoll.addEventListener('click', rollDice);
