"use strict";

// //select
// console.log(document.querySelector(".message").textContent);

// //manipulate value
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".guess").value = 23;
// // console.log(document.querySelector(".guess").value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

const changeBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

const scoreCounter = function () {
  score--;
  document.querySelector(".score").textContent = score;
  return score;
};

displayMessage(".score", score);

const checkInputNumber = function (inputSelector, messageSelector) {
  const guess = Number(document.querySelector(inputSelector).value);
  if (!guess) {
    displayMessage(".message", "⛔ there's no number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage(".message", "⛔ Insert a number between 1 and 20!");
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage(".message", "🔼 More!");
      scoreCounter();
    } else displayMessage(".message", "😓 You LOSE!");
  } else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage(".message", "🔽 Less!");
      scoreCounter();
    } else displayMessage(".message", "😓 You LOSE!");
  } else {
    displayMessage(".message", "💚 Yeah, it's right! 🎉");
    displayMessage(".number", secretNumber);
    changeBackgroundColor("#60b347");
    document.querySelector(".number").style = "width: 30rem";
    if (score > highScore) {
      highScore = score;
      displayMessage(".highscore", highScore);
    }
  }
};

//Event handlers
document.querySelector(".check").addEventListener("click", () => {
  checkInputNumber(".guess", ".message");
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  changeBackgroundColor("#222");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style = "width: 15rem";
  displayMessage(".message", "Start guessing...");
  displayMessage(".score", score);
  displayMessage(".number", "?");
});
