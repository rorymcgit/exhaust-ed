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

  GameController.prototype.spaceBarKeyPressed = function (key) {
    if(key.keyCode === 32){
      if(this.countdownFinished) {
        this.game.car.accelerate();
      }
    }
  };

  GameController.prototype.enterKeyPressed = function (key) {
    if(key.keyCode === 13){
      if((!this.game.isPlaying()) && (!this.countdownStarted)) {
        this.startCountdown();
      }
    }
  };

  GameController.prototype.startCountdown = function () {
    this.countdownStarted = true;
    this._initializeTimeouts();
  };

  GameController.prototype.startGame = function () {
      this.game.begin();
      this.intervalTimer = setInterval(this._loop, 1);
  };

  GameController.prototype.updateGame = function (car) {
    car.updatePosition();
    this.gameView.clearCanvas();
    this.gameView.draw(car);
    this._flashLapTime("Current drag time: " + (this.game.getCurrentDuration() / 1000.0).toFixed(2) + " seconds");
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
    controller.spaceBarKeyPressed(e);
    controller.enterKeyPressed(e);
  };

  GameController.prototype._initializeTimeouts = function (element = document.getElementById('countdown')) {
    element.innerHTML = '3';
    setTimeout(function(){ element.innerHTML = '2'; }, 1000);
    setTimeout(function(){ element.innerHTML = '1'; }, 2000);
    setTimeout(function(){
      document.getElementById('welcome_message').style.display = 'none';
      controller.countdownFinished = true;
      controller.startGame();
    }, 3000);
  };

  exports.GameController = GameController;
})(this);
