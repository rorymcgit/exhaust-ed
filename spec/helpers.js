var mockInterface = function(){
  var htmlString = "<div id='testdiv'><div id='welcome_message'><h2>Press Space to begin and then start mashing!</h2></div><div id='countdown'></div><div id='canvas_container'></div><div id='score_container'></div></div>";
  dummyElement = document.createElement('div');
  dummyElement.innerHTML = htmlString;
  document.body.appendChild(dummyElement);
  return dummyElement;
};

var unmockInterface = function(dummyElement){
  document.body.removeChild(dummyElement);
};

var mockEventKeyup = function(code){
  var mockEvent = document.createEvent("Events");
  mockEvent.initEvent("keyup",true, true);
  mockEvent.keyCode = code;
  mockEvent.which = code;
  return mockEvent;
};

var mockEventKeydown = function(code){
  var mockEvent = document.createEvent("Events");
  mockEvent.initEvent("keydown",true, true);
  mockEvent.keyCode = code;
  mockEvent.which = code;
  return mockEvent;
};
