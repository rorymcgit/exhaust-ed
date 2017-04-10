(function(exports) {

  function Game() {
    this.playing = false;
  }

  Game.prototype.begin = function() {
    this.playing = true;
  };

  Game.prototype.end = function() {
    this.playing = false;
  };

  Game.prototype._isPlaying = function() {
    return this.playing;
  };

  exports.Game = Game;
})(this);
