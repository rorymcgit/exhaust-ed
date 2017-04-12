
var gameController;
var dummyElement;

describe("GameController", function() {
  beforeAll(function() {
    dummyElement = mockInterface();
    gameController = new GameController();
  });

  it("binds the spacebar key to the keyup event", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keyPressed').and.callThrough();
    var spaceBar = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.bindKeys();
    window.dispatchEvent(spaceBar);
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', gameController._pressKeyHandler, false);
    expect(myKeyPressSpy).toHaveBeenCalledWith(spaceBar);
  });

  it("unbinds the spacebar key to the keyup event", function() {
    var spyRemoveEventListener = spyOn(window, 'removeEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keyPressed').and.callThrough();
    var spaceBar = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.unbindKeys();
    window.dispatchEvent(spaceBar);
    expect(spyRemoveEventListener).toHaveBeenCalledWith('keyup', gameController._pressKeyHandler, false);
    expect(myKeyPressSpy).not.toHaveBeenCalled();
  });

  it("reached finish line returns false if the car has not reached the right edge of canvas", function() {
    car = new Car();
    spyOn(car, 'getPosition').and.returnValue({'xCoord' : 955, 'yCoord' : 0});
    expect(gameController.reachedFinishLine(car)).toBe(false);
  });

  it("reached finish line returns true when the car reaches the right edge of canvas", function() {
    car = new Car();
    spyOn(car, 'getPosition').and.returnValue({'xCoord' : 1500, 'yCoord' : 0});
    expect(gameController.reachedFinishLine(car)).toBe(true);
  });

  afterAll(function() {
    unmockInterface(dummyElement);
  });

});

//Inject window
