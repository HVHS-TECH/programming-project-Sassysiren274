/*******************************************************/
// setup()
/*******************************************************/
//Never ending ground
// floor = new Sprite(250, 200, 500, 40, 'static');

let player;
let floors = [];
let lastFloorX = 0;
let vel = 3
lastFloor = 250
let coins = [];
let score = 0;

function setup() {
  console.log("setup");
  new Canvas(1250, 650);
  // console.log(625,325);
  world.gravity.y = 10;


  player = new Sprite(60, 0, 30, 30);
  player.color = 'blue';

  camera.on();
  //
  for (let i = 0; i < 10; i++) {
    let coin = new Sprite(random(100, 400), random(0, 150), 10, 10);
    coin.color = 'yellow';
    coin.type = 'coin';
    coins.push(coin);
  }

  //
  wallLH = new Sprite(-10, height / 2, 20, height * 4, 'static');
  wallLH.color = 'black';
  wallTop = new Sprite(player.x, -50, 2000, 20, 'static');
  wallTop.color = 'black';
  wallBot = new Sprite(player.x, 630, 3000, 20, 'static');
  wallBot.color = 'black';

  // creating starting floor
  generateFloor();
}
//******************************************************
//draw()
// *****************************************************/
function draw() {
  background('blue');

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
    player.vel.y = -3;
  }

  if (kb.pressing('down')) {
    player.vel.y = 3;
  }

  // camera following player
  camera.x = player.x;

  // generating more floor when player moves forward
  if (player.x > lastFloorX - 300) {
    generateFloor();
  }
  //
  textSize(20);
  fill(0);
  text("Score: " + score, 10, 20);
}

function generateFloor() {

  for (let i = 0; i < 5; i++) {
    console.log("Wheeeee!")
    // random gaps
    //  if (random() > 0.3) {

    let floor = new Sprite(lastFloorX + 250, 200, 500, 40, 'static');
    floor.color = 'green';
    floors.push(floor);
    lastFloorX += 500 + random(300, 450)
  }
  //
  for (let i = coins.length - 1; i >= 0; i--) {
    if (player.overlaps(coins[i])) {
      coins[i].remove();
      score += 1;
    }
  }
}
