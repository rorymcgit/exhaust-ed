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
    context.fillRect(car.xPosition, car.yPosition, car.width, car.height);
    this._drawLines(context);
  };

  GameView.prototype.clearCanvas = function () {
    context = this.track.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  GameView.prototype.getDurationString = function (duration) {
    return "Your lap time was: " + (duration /  1000.0) + " seconds";
  };

  GameView.prototype._drawLines = function() {
    this._drawStartLine();
    this._drawFinishLine();
  };

  GameView.prototype._drawFinishLine = function () {
    context = this.track.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(this.track.width - this.game.car.width,0);
    context.lineTo(this.track.width - this.game.car.width,this.track.height);
    context.stroke();
  };

  GameView.prototype._drawStartLine = function () {
    context = this.track.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'green';
    context.moveTo(this.game.car.width,0);
    context.lineTo(this.game.car.width,this.track.height);
    context.stroke();
  };

  exports.GameView = GameView;
})(this);
