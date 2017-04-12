
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

  it("binds handlers to the keyup and keydown events", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    gameController.bindKeys();
    expect(spyAddEventListener).toHaveBeenCalledWith('keyup', gameController._keyupHandler, false);
    expect(spyAddEventListener).toHaveBeenCalledWith('keydown', gameController._keydownHandler, false);
  });


  it("pressKeyHandler is called with a key", function() {
    var myCarSpyAccelerate = spyOn(car, 'accelerate').and.callThrough();
    var myKeyPressSpy = spyOn(gameController, 'keyup').and.callThrough();
    var spacebarEvent = mockEventKeyup(32);
    window.dispatchEvent(spacebarEvent);
    expect(myKeyPressSpy).toHaveBeenCalledWith(spacebarEvent);
    expect(myCarSpyAccelerate).toHaveBeenCalled();
  });

  it("_keydownHandler is called with a spacebar key and added to keys", function() {
    var myKeyPressSpy = spyOn(gameController, 'keydown').and.callThrough();
    var keyEvent = mockEventKeydown(38);
    window.dispatchEvent(keyEvent);
    expect(gameController.keys[38]).toBe(true);
    expect(gameController.keys).toEqual({38 : true});
    expect(myKeyPressSpy).toHaveBeenCalledWith(keyEvent);
  });

  it("_keyupHandler is called with a spacebar key and added to keys", function() {
    var myKeyPressSpy = spyOn(gameController, 'keyup').and.callThrough();
    var keyEventDown = mockEventKeydown(38);
    window.dispatchEvent(keyEventDown);
    var keyEventRelease = mockEventKeyup(38);
    window.dispatchEvent(keyEventRelease);
    expect(gameController.keys[38]).toBe(undefined);
    expect(gameController.keys).toEqual({});
    expect(myKeyPressSpy).toHaveBeenCalledWith(keyEventRelease);
  });
  
  it("_keydownHandler is called with an enter key and added to keys", function() {
    var myKeyPressSpy = spyOn(gameController, 'keydown').and.callThrough();
    var keyEvent = mockEventKeydown(13);
    window.dispatchEvent(keyEvent);
    expect(gameController.keys[13]).toBe(true);
    expect(gameController.keys).toEqual({13 : true});
    expect(myKeyPressSpy).toHaveBeenCalledWith(keyEvent);
  });

  it("_keyupHandler is called with an enter key and added to keys", function() {
    var myKeyPressSpy = spyOn(gameController, 'keyup').and.callThrough();
    var keyEventDown = mockEventKeydown(13);
    window.dispatchEvent(keyEventDown);
    var keyEventRelease = mockEventKeyup(13);
    window.dispatchEvent(keyEventRelease);
    expect(gameController.keys[13]).toBe(undefined);
    expect(gameController.keys).toEqual({});
    expect(myKeyPressSpy).toHaveBeenCalledWith(keyEventRelease);
  });

  it("unbinds keyup & keydown events", function() {
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

  describe("finish line", function() {
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
  });

  describe("countdown", function() {
    it("starts a countdown when countdown function called", function() {
      gameController.startCountdown();
      expect(dummyElement.childNodes[0].childNodes[1].innerHTML).toEqual('3');
    });
  });

  afterAll(function() {
    unmockInterface(dummyElement);
  });
});
