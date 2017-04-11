
var gameController = new GameController();

describe("GameController", function() {

  it("binds the spacebar key to the keyup event", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    var mySpy = spyOn(gameController, 'keyPressed').and.callThrough();
    var spaceBar = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.bindKeys();
    window.dispatchEvent(spaceBar);
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', jasmine.any(Function), false);
    expect(mySpy).toHaveBeenCalledWith(spaceBar);
  });

  it("reached finish line returns false if the car has not reached the right edge of canvas", function() {
    car = new Car();
    spyOn(car, 'getPosition').and.returnValue(955);
    expect(gameController.reachedFinishLine(car)).toBe(false);
  });

  it("reached finish line returns true when the car reaches the right edge of canvas", function() {
    car = new Car();
    spyOn(car, 'getPosition').and.returnValue(1460);
    expect(gameController.reachedFinishLine(car)).toBe(true);
  });

});

//Inject window
