const GameView = require('./lib/game_view.js');

document.addEventListener("DOMContentLoaded", function(event) {
  const canv = document.getElementById("game-canvas");
  const ctx = canv.getContext("2d");
  const gv = new GameView(ctx);
  // debugger
  gv.start();
});
