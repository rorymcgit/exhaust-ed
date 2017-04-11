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

});

//Inject window
