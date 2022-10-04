import rl from "readline-sync"; // type:module works, morden new way
// const rl = require ('readline-sync');  old style
/*const name = rl.question("What is your name? ");
// console.log(name);
console.log(`Hello ${name}!`);


let input;
while (input !=='stop'){
input =rl.question ('what is your name?')
console.log(input);
}

const player1Name =rl.question("what is player1's name");
if ()
*/

console.log("Welcome to Rock, Paper, Scissors");
console.log("Please enter your name.");

const winner = (player0, player1) => {
  if (player0 === player1) {
    console.log("draw");
  } else if (player0 === "rock") {
    if (player1 === "paper") {
      console.log("play1 win");
    }
  }
};
