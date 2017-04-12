(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    controller = this;
    this.intervalTimer;
    this.bindKeys();
    this.updateGame(this.game.car);
    this.keys = {};
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', this._keyupHandler, false);
    window.addEventListener('keydown', this._keydownHandler, false);
  };

  GameController.prototype.unbindKeys = function () {
    window.removeEventListener('keyup', this._keyupHandler, false);
    window.removeEventListener('keydown', this._keydownHandler, false);
  };

  GameController.prototype.keyup = function (key) {
    this._removeKey(key);
    if(key.keyCode == 32){
      this.game.car.accelerate();
      if (!this.game.isPlaying()) {
        this.startGame();
      }
    }
  };

  GameController.prototype.keydown = function (key) {
    this._addKey(key);
  };

  GameController.prototype.startGame = function () {
    document.getElementById('welcome_message').style.display = 'none';
    this.game.begin();
    this.intervalTimer = setInterval(this._loop, 1);
  };

  GameController.prototype.updateGame = function (car) {
    this._updateCarPosition(car);
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

  GameController.prototype._updateCarPosition = function (car) {
    if(this.keys){
      if(this.keys[38]){
        car.moveUp();
      }
      if(this.keys[40]){
        car.moveDown();
      }
    }
    car.moveForward();
  };

  GameController.prototype._addKey = function (key) {
    this.keys[key.which] = true;
  };

  GameController.prototype._removeKey = function (key) {
    delete this.keys[key.which];
  };

  GameController.prototype._flashLapTime = function(message){
    $('#score_container').html('<h1>' + message + '</h1>');
  };

  GameController.prototype._keyupHandler = function(e) {
    controller.keyup(e);
  };

  GameController.prototype._keydownHandler = function(e) {
    controller.keydown(e);
  };

  exports.GameController = GameController;
})(this);
