var gameController = new GameController();


describe("GameController", function() {

  it("#bindKeys registers a 'keyup' event listener", function() {
    var spyAddEventListener = spyOn(window, 'addEventListener').and.callThrough();
    gameController.bindKeys();
    expect(spyAddEventListener).toHaveBeenCalled();
  });

  it("#keyPressed is called the space bar is pressed", function() {
    var mySpy = spyOn(gameController, 'keyPressed').and.callThrough();
    gameController.bindKeys();
    var e = new KeyboardEvent('keyup',{'keyCode':32,'which':32});
    window.dispatchEvent(e);
    expect(mySpy).toHaveBeenCalledWith(e);
  });


});
