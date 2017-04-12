
var gameController;
var dummyElement;

function carDouble() {
  this.xPosition = 0;
  this.yPosition = 0;
}

carDouble.prototype = {
  moveForward: function() {
  },
  moveUp: function() {
  // console.log("hello");
  },
  moveDown: function() {
  },
  accelerate: function(){
  },
  getPosition: function(){
      return {'xCoord' : this.xPosition, 'yCoord' : this.yPosition};
  }
};


function gameDouble(carDouble) {
  this.car = carDouble;
}

gameDouble.prototype = {
  getCurrentDuration: function() {
  },
  isPlaying: function(){

  },
  begin: function(){

  }
};


function gameViewDouble(gameDouble) {
  this.game = gameDouble;
}

gameViewDouble.prototype = {
  clearCanvas: function() {
  },
  draw: function() {
  }
};


describe("GameController", function() {
  beforeAll(function() {
    dummyElement = mockInterface();
    car = new carDouble();
    game = new gameDouble(car);
    gameView = new gameViewDouble(game);
    gameController = new GameController(gameView, game);
  });

  it("binds pressKeyHandler to the keyup event", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    gameController.bindKeys();
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', gameController._keyupHandler, false);
    expect(spyAddEventListener).toHaveBeenCalledWith('keydown', gameController._keydownHandler, false);
  });


  it("pressKeyHandler is called with spacebar key", function() {
    var myCarSpyAccelerate = spyOn(car, 'accelerate').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keyup').and.callThrough();
    var spacebarEvent = mockEventKeyup(32);
    window.dispatchEvent(spacebarEvent);
    expect(myKeyPressSpy).toHaveBeenCalledWith(spacebarEvent);
    expect(myCarSpyAccelerate).toHaveBeenCalled();
  });

  it("pressKeyHandler is called with up arrow key", function() {
    var myCarSpyMoveUp = spyOn(car, 'moveUp').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keydown').and.callThrough();
    var upKeyEvent = mockEventKeydown(38);
    window.dispatchEvent(upKeyEvent);
    expect(myKeyPressSpy).toHaveBeenCalledWith(upKeyEvent);
    expect(myCarSpyMoveUp).toHaveBeenCalled();
  });

  it("pressKeyHandler is called with down arrow key", function() {
    var myCarSpyMoveDown = spyOn(car, 'moveDown').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keydown').and.callThrough();
    var downKeyEvent = mockEventKeydown(40);
    window.dispatchEvent(downKeyEvent);
    expect(myKeyPressSpy).toHaveBeenCalledWith(downKeyEvent);
    expect(myCarSpyMoveDown).toHaveBeenCalled();
  });

  it("unbinds the spacebar key to the keyup & keydown events", function() {
    var spyRemoveEventListener = spyOn(window, 'removeEventListener').and.callThrough();
    var myKeyupSpy = spyOn(gameController, 'keyup').and.callThrough();
    var myKeydownSpy = spyOn(gameController, 'keydown').and.callThrough();
    var upKeyEvent = mockEventKeydown(38);
    var spacebarEvent = mockEventKeydown(32);
    gameController.unbindKeys();
    window.dispatchEvent(upKeyEvent);
    window.dispatchEvent(spacebarEvent);
    expect(spyRemoveEventListener).toHaveBeenCalledWith('keyup', gameController._keyupHandler, false);
    expect(spyRemoveEventListener).toHaveBeenCalledWith('keydown', gameController._keydownHandler, false);
    expect(myKeyupSpy).not.toHaveBeenCalled();
    expect(myKeydownSpy).not.toHaveBeenCalled();
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
