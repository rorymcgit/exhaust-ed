(function(exports) {

  function GameController(view, model) {
    this.gameView = view;
    this.game = model;
  }

  GameController.prototype.bindKeys = function () {
    window.addEventListener('keyup', function(e) {
                    this.keyPressed(e);
                }.bind(this), false);
  };

  GameController.prototype.keyPressed = function (args) {

  };

  exports.GameController = GameController;
})(this);
