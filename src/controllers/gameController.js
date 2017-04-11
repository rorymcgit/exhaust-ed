(function(exports) {

  function GameController(gameView = new GameView(), game = new Game()) {
    this.gameView = gameView;
    this.game = game;
    this.bindKeys();
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

        setInterval(this.loop, 1);
      }
    }
  };

  GameController.prototype.updateGame = function (car) {
    this.gameView.clearCanvas();
    car.updatePosition();
    this.gameView.draw(car);
  };

  GameController.prototype.loop = function() {
    controller.updateGame(controller.game.car);
  };

  exports.GameController = GameController;
})(this);
