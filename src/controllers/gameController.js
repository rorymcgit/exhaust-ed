(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    controller = this;
    this.intervalTimer;
    this.keys = {};
    this.createObstacles();
    this.bindKeys();
    this.updateGame(this.game.car);
  }

  GameController.prototype.createObstacles = function () {
    this.game.addObstacle(new Obstacle(5, 100, "red", 500, 100));
    this.game.addObstacle(new Obstacle(5, 100, "red", 700, 0));
    this.game.addObstacle(new Obstacle(5, 100, "red", 900, 200));
    this.game.addObstacle(new Obstacle(5, 100, "red", 1100, 50));
    this.game.addObstacle(new Obstacle(5, 100, "red", 1100, 50));
    this.game.addObstacle(new Obstacle(5, 100, "red", 1300, 150));
  };

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', this._keyupHandler, false);
    window.addEventListener('keydown', this._keydownHandler, false);
  };

  GameController.prototype.unbindKeys = function () {
    window.removeEventListener('keyup', this._keyupHandler, false);
    window.removeEventListener('keydown', this._keydownHandler, false);
  };

  GameController.prototype.keyup = function (key) {
    if(key.keyCode == 32){
      if(this.countdownFinished) {
        this.game.car.accelerate();
      }
    }
    this._removeKey(key);
  };

  GameController.prototype.keydown = function (key) {
    this._addKey(key);
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
    this._updateCarPosition(car);
    this.gameView.clearCanvas();
    this.gameView.draw(car);
    this.gameView.drawObstacles(this.game.obstacles);
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

  GameController.prototype._updateCarPosition = function (car) {
    if(this.keys){
      if(this.keys[38]){
        if(!this.collidingBottom(car)){
            car.moveUp();
        }
      }
      if(this.keys[40]){
        if(!this.collidingTop(car)){
          car.moveDown();
        }
      }
    }
    if(!this.isColliding(car)){
      car.moveForward();
    }
    else{
      car.moveBackward();
      car.resetSpeed();
    }
  };

  GameController.prototype.isColliding = function (car) {
    var obstacle = this.game.obstacles[0];
    if(((car.xPosition + car.width).toFixed(0)) == obstacle.xPosition) {
      if ((car.yPosition + car.height >= obstacle.yPosition - car.height) && (car.yPosition + car.height <= obstacle.yPosition + obstacle.height + car.height)) {
        if ((car.yPosition <= obstacle.yPosition + obstacle.height + car.height) && (car.yPosition >= obstacle.yPosition - car.height)) {
          return true;
        }
      }
    }
    return false;
  };

  GameController.prototype.collidingTop = function (car) {
    var obstacle = this.game.obstacles[0];
    if((car.xPosition + car.width > obstacle.xPosition) && (car.xPosition < obstacle.xPosition + obstacle.width)){
      if(car.yPosition + car.height >= obstacle.yPosition){
        return true;
      }
    }
    return false;
  };

  GameController.prototype.collidingBottom = function (car) {
    var obstacle = this.game.obstacles[0];
    if((car.xPosition + car.width > obstacle.xPosition) && (car.xPosition < obstacle.xPosition + obstacle.width)){
      if(car.yPosition <= obstacle.yPosition + obstacle.height){
        return true;
      }
    }
    return false;
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
