const Util = require('./util.js');
const MovingObject = require('./moving_object.js');


function Asteroid(pos, game){
  const options = {
    pos: pos,
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    vel: Util.randomVec(10),
    game: game
  };
  // debugger
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.RADIUS = 50;
Asteroid.COLOR = "brown";


module.exports = Asteroid;
