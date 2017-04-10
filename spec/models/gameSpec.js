var game = new Game();

describe("Game", function() {
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
    game.setStartTime();
    expect(game.startTime).not.toBe(null);
  });

  it("sets the end time", function(){
    game.setStartTime();
    game.setEndTime();
    expect(game.endTime).not.toBe(null);
  });

  it("calculates the duration of the game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game.setStartTime();
    spy.and.returnValue(dummyEndDate);
    game.setEndTime();
    expect(game.getDuration()).toEqual(5000);
  });

});
