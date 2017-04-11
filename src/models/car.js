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

  exports.Car = Car;
})(this);
