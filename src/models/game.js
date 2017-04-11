(function(exports) {

  function Game() {
    this.playing = false;
    this.startTime = null;
    this.endTime = null;
  }

  Game.prototype.begin = function() {
    this.playing = true;
    this._setStartTime();
  };

  Game.prototype.end = function() {
    this.playing = false;
    this._setEndTime();
    return this._getDuration();
  };


  Game.prototype._getDuration = function () {
    return this.endTime - this.startTime;
  };

  Game.prototype._isPlaying = function() {
    return this.playing;
  };

  Game.prototype._setStartTime = function () {
    this.startTime = new Date();
  };

  Game.prototype._setEndTime = function () {
    this.endTime = new Date();
  };



  exports.Game = Game;
})(this);
