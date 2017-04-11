(function(exports) {

  function GameView(game = new Game()) {
    this.game = game;
    this.createCanvas();
  }

  GameView.prototype.createCanvas = function (element = document.getElementById('canvas_container')) {
    canvasHTML = '<canvas id="canvas" width="1500" height="300" style="border: solid 1px;"></canvas>';
    element.innerHTML = canvasHTML;
    this.track = element.children[0];
  };

  GameView.prototype.draw = function (car) {
    context = this.track.getContext('2d');
    context.fillStyle = car.colour;
    context.fillRect(car.position, 0, car.width, car.height);
  };

  GameView.prototype.clearCanvas = function () {
    context = this.track.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  GameView.prototype.getDurationString = function (duration) {
    return "Your lap time was: " + (duration /  1000.0);
  };

  exports.GameView = GameView;
})(this);
