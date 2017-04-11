(function(exports) {

  function GameController(gameView, game) {
    this.gameView = gameView;
    this.game = game;
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', function(e) {
                    this.keyPressed(e);
                }.bind(this), false);
  };

  GameController.prototype.keyPressed = function (args) {
    // console.log(args);
  };

  exports.GameController = GameController;
})(this);
