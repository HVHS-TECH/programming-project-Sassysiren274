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
 <script src="index.html"></script>

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
