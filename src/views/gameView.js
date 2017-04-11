(function(exports) {

  function GameView(game) {
    this.game = game;
    // this.canvas = $('#canvas')[0].getContext('2d');
  }

  GameView.prototype.draw = function () {

  };

  GameView.prototype.createCanvas = function (element = document.getElementById('canvas_container')) {
    element.innerHTML = ('<canvas id="canvas" width="1500" height="300" style="border: solid 1px;"></canvas>');
  };

  exports.GameView = GameView;
})(this);
