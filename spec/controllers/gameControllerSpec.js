var gameController = new GameController();


describe("GameController", function() {
  // it("starts a game", function() {
  //
  // });

  it("registers a 'keyup' event listener", function() {
    spyOn(gameController, 'bindKeys').and.callThrough();
    gameController.bindKeys();
    expect(window.addEventListener).toHaveBeenCalledWith("keyup", keyPressed, false)
  });
});
