function init() {
  var stage = new createjs.Stage("effect1");
  var snowflakeArray = new Array();
  var counter = 0;

  // event handlers
  window.addEventListener("resize", responsiveCanvas);
  createjs.Ticker.addEventListener("tick", handvarick);
  createjs.Ticker.setFPS(60);

  // stage resizer
  function responsiveCanvas() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var windowRatio = width/height;
      stage.canvas.width = width;
      stage.canvas.height = height;
      stage.update();
  }

  // generate a snowflake at top of page
  function createSnowflake(i) {
    var graphics = new createjs.Graphics();
      graphics.beginFill("white").drawPolyStar(0,0,Math.random()*10,12,0.8,0);
    var shape = new createjs.Shape(graphics);
      shape.x = Math.random()*(window.innerWidth + 500) - 500;
    stage.addChild(shape);
  }

  // ticker event to make snowflakes fall
  function handvarick(evt) {

    for (var i = 0; i < stage.getNumChildren(); i++) {

      var currentElement = stage.getChildAt(i);
      var radius = currentElement.graphics.command.radius;
      currentElement.y += radius/8;
      if (radius < 1) { currentElement.x += radius * 3 }
      else if (radius < 5) { currentElement.x += (1/(radius)) }
      else { currentElement.x += (1/(radius/4)) }

      // remove snowflakes to avoid performance issues
      if (currentElement.y > window.innerHeight) {
        stage.removeChildAt(i);
      }

      // make disappear on mouseover
      // yDifference = currentElement.y - stage.mouseY;
      // xDifference = currentElement.x - stage.mouseX;
      // if (Math.abs(yDifference) < 30 && (Math.abs(xDifference) < 30))
      //   stage.removeChildAt(i);
    }
    if (evt.timeStamp % 4 === 0) {
      createSnowflake();
    }
    stage.update();
  }
  responsiveCanvas();
}
