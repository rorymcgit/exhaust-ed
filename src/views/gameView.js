(function(exports) {

  function GameView(model) {
    this.game = model;
    this.canvas = $(‘#canvas’)[0].getContext('2d');
  }

  GameView.prototype.draw = function () {

  };

  exports.GameView = GameView;
})(this);
