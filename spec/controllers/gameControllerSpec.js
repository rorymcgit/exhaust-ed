
var gameController;
var dummyElement;

describe("GameController", function() {
  beforeAll(function() {
    dummyElement = mockInterface();
    gameController = new GameController();
  });

  it("binds the spacebar key to the keyup event", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'spaceBarKeyPressed').and.callThrough();
    var spaceBar = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.bindKeys();
    window.dispatchEvent(spaceBar);
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', gameController._pressKeyHandler, false);
    expect(myKeyPressSpy).toHaveBeenCalledWith(spaceBar);
  });

  it("unbinds the spacebar key to the keyup event", function() {
    var spyRemoveEventListener = spyOn(window, 'removeEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'spaceBarKeyPressed').and.callThrough();
    var spaceBar = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.unbindKeys();
    window.dispatchEvent(spaceBar);
    expect(spyRemoveEventListener).toHaveBeenCalledWith('keyup', gameController._pressKeyHandler, false);
    expect(myKeyPressSpy).not.toHaveBeenCalled();
  });

  it("binds the enter key to the keyup event", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'enterKeyPressed').and.callThrough();
    var enterKey = new KeyboardEvent('keyup',{'keyCode':13,'which':13});
    gameController.bindKeys();
    window.dispatchEvent(enterKey);
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', gameController._pressKeyHandler, false);
    expect(myKeyPressSpy).toHaveBeenCalledWith(enterKey);
  });

  it("unbinds the enter key to the keyup event", function() {
    var spyRemoveEventListener = spyOn(window, 'removeEventListener').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'enterKeyPressed').and.callThrough();
    var enterKey = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    gameController.unbindKeys();
    window.dispatchEvent(enterKey);
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

  it("starts a countdown when countdown function called", function() {
    gameController.startCountdown();
    expect(dummyElement.childNodes[0].childNodes[1].innerHTML).toEqual('3');
  });

  afterAll(function() {
    unmockInterface(dummyElement);
  });

});

//Inject window
