var gameView;
var dummyElement;

describe("GameView", function() {

  beforeAll(function() {
    dummyElement = mockInterface();
    gameView = new GameView(new Game());
  });

  it("has a game", function() {
    expect(gameView.game instanceof Game).toBe(true);
  });

  it("has a canvas", function() {
    canvasHTML = '<canvas id="canvas" width="1500" height="300" style="border: solid 1px;"></canvas>';
    gameView.createCanvas(dummyElement);
    expect(dummyElement.innerHTML).toEqual(canvasHTML);
  });

  it("draws on the canvas", function(){
    var spy = spyOn(gameView.track.getContext('2d'), 'fillRect').and.callThrough();
    gameView.draw(new Car());
    expect(spy).toHaveBeenCalled();
  });

  it("clears the canvas", function() {
    var spy = spyOn(gameView.track.getContext('2d'), 'clearRect').and.callThrough();
    gameView.clearCanvas();
    expect(spy).toHaveBeenCalled();
  });

  afterAll(function() {
    unmockInterface(dummyElement);
  });
});

describe('Timing Elements', function() {

  beforeAll(function() {
    dummyElement2 = mockInterface();
    gameView2 = new GameView(new Game());
  });

  it("returns a string containing the lap duration", function(){
    expect(gameView2.getDurationString(30000)).toEqual("Your lap time was: 30");
  });

  it("starts a countdown when countdown function called", function() {
    gameView2.startCountdown(document.getElementById('test-countdown'));
    expect(dummyElement2.childNodes[0].childNodes[1].innerHTML).toEqual('3');
  });

  afterAll(function() {
    unmockInterface(dummyElement2);
  });

});
