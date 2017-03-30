const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Game = require("./game.js");
const g = new Game();


function endGame() {
  console.log("You win");
  reader.close();
  }

g.run(reader, endGame);
