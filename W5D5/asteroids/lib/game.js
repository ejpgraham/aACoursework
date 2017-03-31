const Asteroid = require('./asteroid.js');

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 15;

Game.prototype.randomPosition = function() {
  const x = Math.floor(Math.random()*Game.DIM_X);
  const y = Math.floor(Math.random()*Game.DIM_Y);
  return [x, y];
};

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(function(el){
    el.draw(ctx);
  });
};


Game.prototype.moveObjects = function(){
  this.asteroids.forEach(function(el){
    el.move();
  });
};

Game.prototype.wrap = function (pos) {
  return [pos[0] % Game.DIM_X, pos[1] % Game.DIM_Y];
};

module.exports = Game;
