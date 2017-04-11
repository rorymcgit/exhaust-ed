(function(exports) {

  function Car(width = 40, height = 25, colour = "red", speed = 0, position = 0) {
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.speed = speed;
    this.position = position;
  }

  Car.prototype.accelerate = function(){
    this.speed += 0.1;
  };

  Car.prototype.updatePosition = function(){
    this.position = this.position + this.speed;
  };

  Car.prototype.getPosition = function () {
    return this.position;
  };

  exports.Car = Car;
})(this);
