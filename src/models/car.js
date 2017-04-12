(function(exports) {

  function Car(width = 40, height = 25, colour = "red", speed = 0, xPosition = 0, yPosition = 0, bhp = 0.05) {
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.bhp = bhp;
  }

  Car.prototype.accelerate = function(){
    this.speed += this.bhp;
    console.log('accelerating');
  };

  Car.prototype.updatePosition = function(){
    this.xPosition = this.xPosition + this.speed;
  };

  Car.prototype.getPosition = function () {
    return {'xCoord' : this.xPosition, 'yCoord' : this.yPosition};
  };

  exports.Car = Car;
})(this);
