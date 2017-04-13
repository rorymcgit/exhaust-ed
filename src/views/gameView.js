(function(exports) {

  function GameView(game = new Game()) {
    this.game = game;
    this.createCanvas();
  }

  GameView.prototype.createCanvas = function (element = document.getElementById('canvas_container')) {
    canvasHTML = '<canvas id="canvas" width="1260" height="300" style="border: solid 1px; z-index: 1; position: absolute;"></canvas><canvas id="canvas" width="1260" height="300" style="border: solid 1px; z-index: 0; position: absolute;"></canvas>';
    element.innerHTML = canvasHTML;
    this.track = element.children[0];
    context = this.track.getContext('2d');
    this.trackGround = element.children[1];
    trackGroundContext = this.trackGround.getContext('2d');
    var road = new Image();
    road.src = "road_NOyellowline_cropped.jpg"
    road.onload = function() {
      trackGroundContext.drawImage(road, 0, 0);
    };
    var car = this.game.car;
    car.sprite.onload = function() {
      context.drawImage(car.sprite, car.xPosition, car.yPosition);
    };
  };

  GameView.prototype.draw = function (car) {
    context = this.track.getContext('2d');
    context.drawImage(car.sprite, car.xPosition, car.yPosition);
    this._drawLines(context);
  };

  GameView.prototype.clearCanvas = function () {
    context = this.track.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  GameView.prototype.getDurationString = function (duration) {
    return "Your drag time was: " + (duration / 1000.0).toFixed(2) + " s";
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
