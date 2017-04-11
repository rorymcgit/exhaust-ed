(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    this.bindKeys();
    this.intervalTimer;
    controller = this;
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', function(e) {
      this.keyPressed(e);
    }.bind(this), false);
  };

  GameController.prototype.keyPressed = function (key) {
    // console.log(args);
    if(key.keyCode == 32){
      this.game.car.accelerate();

      if (!this.game._isPlaying()) {
        this.game.begin();
        this.intervalTimer = setInterval(this._loop, 1);
      }
    }
  };

  GameController.prototype.updateGame = function (car) {
    this.gameView.clearCanvas();
    car.updatePosition();
    this.gameView.draw(car);
  };

  GameController.prototype.reachedFinishLine = function (car) {
    return car.getPosition() >= 1460;
  };

  GameController.prototype._loop = function() {
    controller.updateGame(controller.game.car);

    if(controller.reachedFinishLine(controller.game.car)){
      clearInterval(controller.intervalTimer);
      controller._flashLapTime(controller.gameView.getDurationString(controller.game.end()));
    }
  };

  GameController.prototype._flashLapTime = function(message){
    window.alert(message);
  };

  exports.GameController = GameController;
})(this);
