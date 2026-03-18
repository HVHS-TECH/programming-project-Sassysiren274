// /*******************************************************/
// // index.js
// /*******************************************************/
// // setup()
// /*******************************************************/
//  console.log("running index.js")
//  function setup() {
// // Now the width and height of the canvas keep changing
// width = random(300,600);
// height = random(300,600);

// cnv = new Canvas(width, height);
// // //
// //  wallLH  = new Sprite(0, height/2, 8, height, 'k');
// //   wallLH.color = 'black';
// //   wallRH  = new Sprite(width, height/2, 8, height, 'k');
// //   wallRH.color = 'black';
// //   wallTop = new Sprite(width/2, 0, width, 8, 'k');
// //   wallTop.color = 'black';
// //   wallBot = new Sprite(width/2, height, width, 8, 'k');
// //   wallBot.color = 'black';

// red = new Sprite(10, 5 ,100,100);
// red.color = 'red';

// green = new Sprite( 90, 20 ,  100,100);
// green.color = 'green';

// blue = new Sprite( 10, 80,  100,100);
// blue.color = 'blue';

// yellow = new Sprite( 50, 25 ,  100,100);
// yellow.color = 'yellow';

// purple = new Sprite( 30, 15,  100,100);
// purple.color = 'purple';
//  }
//  /*******************************************************/
//  // draw()
//  /*******************************************************/
//  function draw() {
//    background(200)


//  }
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
  END OF APP
/*******************************************************/