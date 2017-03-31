// Function.prototype.inherits = function(superClass){
//   function Surrogate(){}
//   Surrogate.prototype = superClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
//
//
// function MovingObject (name) {
//   this.name = name;
// }
// MovingObject.prototype.move = function(){ console.log("IM moving"); };
//
// function Ship (name) { MovingObject.call(this, name); }
// Ship.inherits(MovingObject);
// Ship.prototype.ship = function(){ console.log("IM shipping"); };
//
// function Asteroid (name) { MovingObject.call(this, name); }
// Asteroid.inherits(MovingObject);
// Asteroid.prototype.ass = function() { console.log("I'm assing"); };
//
// const newShip = new Ship("shippie");
// const newAst = new Asteroid("astie");
//
// newShip.ship();
// newAst.ass();

Function.prototype.inherits = function(superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};
