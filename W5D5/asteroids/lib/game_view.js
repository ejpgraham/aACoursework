const Game = require('./game.js');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  const that = this;
  setInterval(function() {
    // debugger
    that.game.moveObjects();
    that.game.draw(that.ctx);
  }, 1000/60);
};

module.exports = GameView;
