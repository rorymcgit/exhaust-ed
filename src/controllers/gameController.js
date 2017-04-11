(function(exports) {

  function GameController(gameView, game) {
    this.gameView = gameView;
    this.game = game;
    this.bindKeys();
    setInterval(this.updateGame, 1);
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', function(e) {
                    this.keyPressed(e);
                }.bind(this), false);
  };

  GameController.prototype.keyPressed = function (args) {
    console.log(args);
    this.game.car.accelerate();
  };

  GameController.prototype.updateGame = function (car = this.game.car) {
    console.log(car.position);
    this.gameView.clearCanvas();
    this.gameView.draw(car);
  };

  exports.GameController = GameController;
})(this);
