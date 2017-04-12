(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    controller = this;
    this.intervalTimer;
    this.bindKeys();
    this.updateGame(this.game.car);
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', this._pressKeyHandler, false);
  };

  GameController.prototype.unbindKeys = function () {
    window.removeEventListener('keyup', this._pressKeyHandler, false);
  };

  GameController.prototype.keyPressed = function (key) {
    if(key.keyCode == 32){
      this.game.car.accelerate();
      if (!this.game.isPlaying()) {
        this.startGame();
      }
    }

    if(key.keyCode == 38){
      this.game.car.moveUp();
    }

    if(key.keyCode == 40){
      this.game.car.moveDown();
    }
    // console.log(key.keyCode);
  };

  GameController.prototype.startGame = function () {
      document.getElementById('welcome_message').style.display = 'none';
      this.game.begin();
      this.intervalTimer = setInterval(this._loop, 1);
  };

  GameController.prototype.updateGame = function (car) {
    // console.log(car);
    car.moveForward();
    this.gameView.clearCanvas();
    this.gameView.draw(car);
    this._flashLapTime("Current drag time: " + (this.game.getCurrentDuration() / 1000.0).toFixed(2));
  };

  GameController.prototype.reachedFinishLine = function (car) {
    return car.getPosition().xCoord >= 1460;
  };

  GameController.prototype._loop = function() {
    controller.updateGame(controller.game.car);
    if(controller.reachedFinishLine(controller.game.car)){
      clearInterval(controller.intervalTimer);
      controller.unbindKeys();
      controller._flashLapTime(controller.gameView.getDurationString(controller.game.end()));
    }
  };

  GameController.prototype._flashLapTime = function(message){
    $('#score_container').html('<h1>' + message + '</h1>');
  };

  GameController.prototype._pressKeyHandler = function(e) {
    controller.keyPressed(e);
  };

  exports.GameController = GameController;
})(this);
