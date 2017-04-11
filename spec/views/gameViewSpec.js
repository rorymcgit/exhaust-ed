var gameView = new GameView(new Game());


describe("GameView", function() {
  it("has a game", function() {
    expect(gameView.game instanceof Game).toBe(true);
  });


  it("has a canvas", function() {
    var dummyElement = function() {
      this.innerHTML = "";
    };
    gameView.createCanvas(dummyElement);
    expect(dummyElement.innerHTML).toEqual('<canvas id="canvas" width="1500" height="300" style="border: solid 1px;"></canvas>')
  });

});
