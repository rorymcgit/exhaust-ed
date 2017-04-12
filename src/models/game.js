(function(exports) {

  function Game(car = new Car()) {
    this.playing = false;
    this.startTime = null;
    this.endTime = null;
    this.car = car;
  }

  Game.prototype.begin = function() {
    this.playing = true;
    this._setStartTime();
  };

  Game.prototype.end = function() {
    this.playing = false;
    this._setEndTime();
    return this.getDuration();
  };

  Game.prototype.getDuration = function () {
    return this.endTime - this.startTime;
  };

  Game.prototype.getCurrentDuration = function () {
    if (this.startTime == null) return 0;
    return new Date() - this.startTime;
  };

  Game.prototype.isPlaying = function() {
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
