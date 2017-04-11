(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    this.intervalTimer;
    this.bindKeys();
    controller = this;
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', function(e) {
      this.keyPressed(e);
    }.bind(this), false);
  };

  GameController.prototype.keyPressed = function (key) {
    if(key.keyCode == 32){
      this.game.car.accelerate();
      if (!this.game._isPlaying()) {
        document.getElementById('welcome_message').style.display = 'none';  
        this.game.begin();
        this.intervalTimer = setInterval(this._loop, 1);
      }
    }
  };

  GameController.prototype.updateGame = function (car) {
    car.updatePosition();
    this.gameView.clearCanvas();
    this.gameView.draw(car);
    this._flashLapTime("Current lap time: " + (this.game.getCurrentDuration() / 1000.0));
  };

  GameController.prototype.reachedFinishLine = function (car) {
    return car.getPosition().xCoord >= 1460;
  };

  GameController.prototype._loop = function() {
    controller.updateGame(controller.game.car);
    if(controller.reachedFinishLine(controller.game.car)){
      clearInterval(controller.intervalTimer);
      controller._flashLapTime(controller.gameView.getDurationString(controller.game.end()));
    }
  };

  GameController.prototype._flashLapTime = function(message){
    $('#score_container').html('<h1>' + message + '</h1>');
  };

  exports.GameController = GameController;
})(this);
