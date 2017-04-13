(function(exports) {

  function Car(width = 40, height = 25, colour = "red", speed = 0, xPosition = 0, yPosition = 0, bhp = 0.05, turnSpeed = 1, src = "redcar_copy.jpg") {
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.bhp = bhp;
    this.turnSpeed = turnSpeed;
    this.sprite = new Image();
    this.sprite.src = src;
  }

  Car.prototype.accelerate = function(){
    this.speed += this.bhp;
  };

  Car.prototype.moveForward = function(){
    this.xPosition = this.xPosition + this.speed;
  };

  Car.prototype.getPosition = function () {
    return {'xCoord' : this.xPosition, 'yCoord' : this.yPosition};
  };

  Car.prototype.moveUp = function(){
    if(this.yPosition >= this.turnSpeed){
      this.yPosition = this.yPosition - this.turnSpeed;
    }
    else{
      this.yPosition = 0;
    }
  };

  Car.prototype.moveDown = function(){
    var difference = 300 - (this.yPosition + this.height)
    if(difference >= this.turnSpeed){
      this.yPosition = this.yPosition + this.turnSpeed;
    }
    else{
      this.yPosition = this.yPosition + difference;
    }

  };

  exports.Car = Car;
})(this);
