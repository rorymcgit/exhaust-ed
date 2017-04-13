$( document ).ready(function() {
  var car = new Car();
  var game = new Game(car);
  var gameView = new GameView(game);
  var gameController = new GameController(gameView, game);
});
