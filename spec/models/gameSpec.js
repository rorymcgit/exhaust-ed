
describe("Game", function() {
  var game = new Game();
  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("has a start time", function() {
    expect(game.startTime).toBeDefined();
  });

  it("has an end time", function() {
    expect(game.endTime).toBeDefined();
  });

  it("starts", function() {
    game.begin();
    expect(game._isPlaying()).toEqual(true);
  });

  it("ends", function() {
    game.begin();
    game.end();
    expect(game._isPlaying()).toEqual(false);
  });

  it("sets the start time", function(){
    game._setStartTime();
    expect(game.startTime).not.toBe(null);
  });

  it("sets the end time", function(){
    game._setStartTime();
    game._setEndTime();
    expect(game.endTime).not.toBe(null);
  });

  it("calculates the duration of the game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game._setStartTime();
    spy.and.returnValue(dummyEndDate);
    game._setEndTime();
    expect(game._getDuration()).toEqual(5000);
  });
});

describe("Game functionality", function(){
  var game = new Game();

  it("starts timing when the game begins", function(){
    game.begin();
    expect(game.startTime).not.toBe(null);
  });

  it("ends timing when the game ends", function(){
    game.begin();
    game.end();
    expect(game.endTime).not.toBe(null);
  });

  it("calculates duration at the end of a game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game.begin();
    spy.and.returnValue(dummyEndDate);
    expect(game.end()).toEqual(5000);
  });
});
