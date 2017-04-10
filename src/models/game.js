(function(exports) {

  function Game() {
    this.playing = false;
    this.startTime = null;
    this.endTime = null;
  }

  Game.prototype.begin = function() {
    this.playing = true;
  };

  Game.prototype.end = function() {
    this.playing = false;
  };

  Game.prototype.setStartTime = function () {
    this.startTime = new Date();
  };

  Game.prototype.setEndTime = function () {
    this.endTime = new Date();
  };

  Game.prototype.getDuration = function () {
    return this.endTime - this.startTime;
  };

  Game.prototype._isPlaying = function() {
    return this.playing;
  };

  exports.Game = Game;
})(this);
