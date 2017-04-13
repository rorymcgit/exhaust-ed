$( document ).ready(function() {
  var car = new Car(40, 25, "Blue", 0, 0, 50, 0.05, 1);
  var game = new Game(car);
  var gameView = new GameView(game);
  var gameController = new GameController(gameView, game);
});
