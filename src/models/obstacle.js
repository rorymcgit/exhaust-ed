(function(exports) {

  function Obstacle(width = 1, height = 100, colour = "black", xPosition = 100, yPosition = 100) {
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  exports.Obstacle = Obstacle;
})(this);
