"use strict";

// //select
// console.log(document.querySelector(".message").textContent);

// //manipulate value
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".guess").value = 23;
// // console.log(document.querySelector(".guess").value);

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;

//Helpers

const showMessage = function (element, message) {
  element.textContent = message;
};

const scoreCounter = function () {
  score--;
  document.querySelector(".score").textContent = score;
  return score;
};

const checkInputNumber = function (inputSelector, messageSelector) {
  const guess = Number(document.querySelector(inputSelector).value);
  const message = document.querySelector(messageSelector);
  if (!guess) {
    showMessage(message, "⛔ there's no number!");
  } else if (guess < 1 || guess > 20) {
    showMessage(message, "⛔ Insert a number between 1 and 20!");
  } else if (guess < secretNumber) {
    if (score > 0) {
      showMessage(message, "🔼 More!");
      scoreCounter();
    } else showMessage(message, "😓 You LOSE!");
  } else if (guess > secretNumber) {
    if (score > 0) {
      showMessage(message, "🔽 Less!");
      scoreCounter();
    } else showMessage(message, "😓 You LOSE!");
  } else {
    showMessage(message, "💚 Yeah, it's right! 🎉");
    document.querySelector(".number").textContent = secretNumber;
  }
};

document.querySelector(".check").addEventListener("click", () => {
  checkInputNumber(".guess", ".message");
});
