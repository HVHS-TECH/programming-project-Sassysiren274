/*******************************************************/
// index.js
/*******************************************************/
// setup()
/*******************************************************/
 console.log("running index.js")
 function setup() {
     console.log("setup"); 
     new Canvas(500,240)
      sprite = new Sprite();
      sprite.width = 300;
      sprite.height = 600;
      sprite.color = 'Red';
      ///Never ending ground
    floor = new Sprite(250, 200, 500, 40, 'static');
  ///
   cnv = new Canvas(500, 500);
 }
 /*******************************************************/
 // draw()
 /*******************************************************/
 function draw() {
   background(200)
   background('navy');
   sprite.x += 5;

 }

/*******************************************************/
//  END OF APP
/*******************************************************/
// function setup() {
//     let gameState = "index.html"
// }

// /******************************************************** 
// ********************************************************/
// function draw() {
//     background(220)
//     if (gameState === "index.html") {
//         drawMenu();
//     } else if (gameState === "Start.js") {
//         drawGame_page();
//     } else if (gameState === "End_page.js") {
//         drawGame_page();
//     }
// }
/*******************************************************/
// Game_page
/*******************************************************/
// setup()
/*******************************************************/
// console.log("running game_page")
// function setup() {
//     console.log("setup"); 
//     new Canvas(500,240)
//      sprite = new Sprite();
//      sprite.width = 150;
//      sprite.height = 150;
//      sprite.color = 'Blue';
//   ///
//   floor = new Sprite(250, 200, 500, 40, 'static');

//   console.log("index.html");
//     console.log("index.js");
// }
// /*******************************************************/
// // draw()
// /*******************************************************/
// function draw() {
//     background('Pink');
//     sprite.x += 5;
// }

/*******************************************************/
//  END OF APP
/*******************************************************/
let player;
let floors = [];
let lastFloorX = 0;
let vel = 3

function setup() {
  new Canvas(500, 240);
  world.gravity.y = 10;

  player = new Sprite(50, 0, 20, 20);
  player.color = 'blue';

  camera.on();
//
  wallLH  = new Sprite(-10, height/2, 20, height*4, 'static');
  wallLH.color = 'black';
  wallTop = new Sprite(player.x, -50, 2000, 20, 'static');
  wallTop.color = 'black';

  // create starting floor
  generateFloor();
}
//******************************************************
// *****************************************************/
function draw() {
  clear();

  // movement
  if (kb.pressing('left')) {
    player.vel.x = -3;
  } 
  else if (kb.pressing('right')) {
    player.vel.x = 3;
  } 
  else {
    player.vel.x = 0;
  }

  if (kb.pressing('up')) {
    player.vel.y = -5;
  }

  if (kb.pressing('down')) {
    player.vel.y = 5;
  }

  // camera follows player
  camera.x = player.x;

  // generate more floor when player moves forward
  if (player.x > lastFloorX - 300) {
    generateFloor();
  }

  // restart if player falls
  if (player.y > 400) {
    player.pos = {x: 50, y: 0};
    player.vel = {x: 0, y: 0};
  }
}

function generateFloor() {

  for (let i = 0; i < 5; i++) {

    // random chance for a gap
    if (random() > 0.3) {

      let floor = new Sprite(lastFloorX + 250, 200, 500, 40, 'static');
      floor.color = 'green';
      floors.push(floor);

    }

    lastFloorX += 100;
  }
  function setup() {
  let c = createCanvas(500, 240);
  c.parent(document.body); // attach canvas to body
  c.style('display', 'block');
  c.style('margin', 'auto'); // horizontally center
  world.gravity.y = 10;

  // rest of your setup...
}
}
