"use strict";

// /* FUNCTIONS:

// - Explanation
// - Exercises
// - Patterns
// - Arrow Functions
// - Recursive functions

// 💪🧑 To go back to shape! 💪🧑

// */

// //Basic Function declaration

// function logger(userName) {
//   const myName = `My name is ${userName}`;
//   return myName;
// }

// const userName = "Diego";

// console.log(`qual é o seu nome?
//   ${logger(userName)}`);

// //Basic function expression
// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };

// // const age = calcAge(1989);
// // console.log(age);

// //Basic Arrow functions
// const calcAge = (birthYear) => 2025 - birthYear;

// console.log(calcAge(1989));

// const calcRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(calcRetirement(1989, "Diego"));

// //Functions calling other functions
// const fruitJuiceSlicer = function (fruit) {
//   return `sliced ${fruit}`;
// };

// const makeFruitJuice = function (fruit) {
//   const slicedFruit = fruitJuiceSlicer(fruit);
//   return `made juice with a ${slicedFruit}`;
// };

// console.log(makeFruitJuice("apple"));

// //Objects and methods
// const user = {
//   firstName: "Diego",
//   lastName: "Bezerra",
//   birthYear: 1989,
//   job: "developer",
//   friends: ["Lucas", "Gustavo", "Felipe"],
//   hasDriverLicense: true,

//   calcAge: function (actualYear) {
//     this.age = actualYear - this.birthYear;
//     return this.age;
//   },

//   getSummary: function (date) {
//     return `${this.firstName} is a ${this.calcAge(date)} years old ${
//       this.job
//     }, and he ${this.hasDriverLicense ? "has" : "has not"} a driver license`;
//   },
// };

// //challenge 1
// //"Diego has 3 friends, and his best friend is Lucas."
// console.log(
//   `${user.firstName} has ${user.friends.length} friends, and his best friend is ${user.friends[0]}, he is ${user.age} old`
// );

// console.log(user.getSummary(2025));

// //"Diego is a 36 years old developer, and he has a driver's license
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`rep: ${rep}`);
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = tip + bills[i];
  totals.push(total);
}

for (let i = 0; i < tips.length; i++) {
  console.log(`Value: ${bills[i]}
    Tip: ${tips[i]}
    total: ${totals[i]}`);
}
