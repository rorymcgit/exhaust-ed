
(function(exports) {

  function Car() {
    this.speed = 0;
  }

  Car.prototype.accelerate = function(){
    this.speed += 0.1;
  };

  exports.Car = Car;
})(this);
