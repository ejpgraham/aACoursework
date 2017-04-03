const HanoiGame = require("./game.js");
const HanoiView = require("./view.js");

$( () => {
  console.log("hi");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);

});
