(function(exports) {

  function GameController(game = new Game()) {
    this.game = game;
  }

GameController.prototype.draw = function () {

};

GameController.prototype.keyPressed = function () {

};

GameController.prototype.bindKeys = function () {
  // console.log(this.keyPressed)
  window.addEventListener("keyup", keyPressed, false);
};


// GameController.prototype.getCanvas = function () {
//
// };

  exports.GameController = GameController;
})(this);
