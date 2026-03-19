/*******************************************************/
// setup()
/*******************************************************/
    //Never ending ground
    // floor = new Sprite(250, 200, 500, 40, 'static');

let player;
let floors = [];
let lastFloorX = 0;
let vel = 3
lastFloor= 250

function setup() {
  console.log("setup");
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

  // creating starting floor
  generateFloor();
}
//******************************************************
//draw()
// *****************************************************/
function draw() {
   background('navy');

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

  // camera following player
  camera.x = player.x;

  // generating more floor when player moves forward
  if (player.x > lastFloorX - 300) {
    generateFloor();
  }
}

function generateFloor() {
 
  for (let i = 0; i < 5; i++) {
console.log ("Wheeeee!")
    // random gaps
  //  if (random() > 0.3) {

      let floor = new Sprite(lastFloorX + 250, 200, 500, 40, 'static');
      floor.color = 'green';
      floors.push(floor);
   lastFloorX+= 500 + random(300,450)

   // }

   // lastFloorX += 100;

  }
 }
