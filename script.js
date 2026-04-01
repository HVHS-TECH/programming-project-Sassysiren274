/*******************************************************/
// setup()
/*******************************************************/
let player;
let floors = [];
let lastFloorX = 0;
let vel = 3
let coins = [];
let score = 0;
let gameOver = false;
let bottomWalls = [];
let topWalls = [];
let bg;
//
function preload() {
  bg = loadImage('Game-background2.png');
}
//
function setup() {
  console.log("setup");
  new Canvas(1284, 642);
  world.gravity.y = 10;
  //
  player = new Sprite(60, 0, 30, 30);
  player.color = '#ffffff';
  //
  camera.on();
  //
  for (let i = 0; i < 10; i++) {
    let coin = new Sprite(random(100, 400), random(0, 150), 10, 10);
    coin.color = '#ffd700';
    coin.stroke = '#fff';
    coin.strokeWeight = 2;
    coin.type = 'coin';
    coins.push(coin);
  }
  //
  wallLH = new Sprite(-10, height / 2, 20, height, 'static');
  wallLH.color = 'black';

  // creating starting floor
  generateFloor();
}
//******************************************************
//draw()
// *****************************************************/
function draw() {
  camera.off();                  // Turn off camera for static elements
  image(bg, 0, 0, width, height); // Draw the background
  camera.on();                   // Turn camera back on for moving objects

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

  //
  if (random() > 0.97) {
    let coin = new Sprite(player.x + random(200, 400), random(50, 200), 10, 10);
    coin.color = 'yellow';
    coin.type = 'coin';
    coins.push(coin);
  }

  if (player.x > lastFloorX - 300) {
    generateFloor();
  }
  //
  for (let i = coins.length - 1; i >= 0; i--) {
    if (player.overlaps(coins[i])) {
      coins[i].remove();
      coins.splice(i, 1);
      score += 10;
    }
  }
  console.log(coins.length)
  //
  camera.off();
  textSize(20);
  fill(0);
  text("Score: " + score, 10, 20);
  camera.on();

  //
  if (player.y > height + 10) {
    gameOver = true;
  }
  //
  if (gameOver) {
    player.vel.x = 0;
    player.vel.y = 0;

    textAlign(CENTER, CENTER);
    textSize(60);
    fill('red');
    text("GAME OVER", camera.x, height / 2 - 40);

    fill(255);
    textSize(24);
    text("Press R to Restart", camera.x, height / 2 + 20);

    if (kb.presses('r')) {
      location.reload();
    }

    return;
  }
  // player colliding with the bottom wall
  for (let wall of bottomWalls) {
    if (player.overlaps(wall)) {
      gameOver = true;
    }
  }
  // Check collision with top wall
  if (player.y < 0) {
    gameOver = true;
  }
}
//
function generateFloor() {

  for (let i = 0; i < 5; i++) {
    console.log("Wheeeee!")

    //Floor
    let floor = new Sprite(lastFloorX + 250, 200, 500, 40, 'static');
    floor.color = '#3ea010';
    floors.push(floor);

    //Bottomwall
    let bottomWall = new Sprite(lastFloorX + 250, height + 20, 500, 40, 'static');
    bottomWall.color = '#2c7a0b';
    bottomWall.type = 'danger';
    bottomWalls.push(bottomWall);

    // TOP WALL (optional infinite too)
    let topWall = new Sprite(lastFloorX + 250, -50, 500, 40, 'static');
    topWall.color = 'black';
    topWall.type = 'danger';
    topWalls.push(topWall);

  }
  lastFloorX += 500 + random(300, 450);
}