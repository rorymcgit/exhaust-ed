var mockInterface = function(){
  var htmlString = "<div id='testdiv'><div id='welcome_message'><h2>Press Space to begin and then start mashing!</h2></div><div id='test-countdown'></div><div id='canvas_container'></div><div id='score_container'></div></div>";
  dummyElement = document.createElement('div');
  dummyElement.innerHTML = htmlString;
  document.body.appendChild(dummyElement);
  return dummyElement;
};

var unmockInterface = function(dummyElement){
  document.body.removeChild(dummyElement);
};
