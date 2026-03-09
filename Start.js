/*******************************************************/
// Game_page
/*******************************************************/
// setup()
/*******************************************************/
console.log("running game_page")
function setup() {
    console.log("setup"); 
    new Canvas(500,240)
     sprite = new Sprite();
     sprite.width = 150;
     sprite.height = 150;
     sprite.color = 'Blue';
  ///
  floor = new Sprite(250, 200, 500, 40, 'static');

  console.log("index.html");
    console.log("index.js");
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('Pink');
  sprite.x += 5;
}

/*******************************************************/
//  END OF APP
/*******************************************************/