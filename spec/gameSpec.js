var game = new Game();

describe("Game", function() {
  it("exists", function() {
    expect(game).toBeDefined();
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
});
