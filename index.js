/*******************************************************/
// index.js
/*******************************************************/
// setup()
/*******************************************************/
/*console.log("running index.js")
function setup() {
    console.log("setup"); 
    new Canvas(1000,1000)
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
/*function draw() {
  background('navy');
  sprite.x += 5;

}

/*******************************************************/
//  END OF APP
/*******************************************************/
function setup() {
    let gameState = "index.html"
}
function draw() {
    background(220)
    if (gameState === "index.html"){
        drawMenu();
    } else if(gameState === "Game_page.js") {
        drawGame_page();
    } else if (gameState === "End_page.js")
}
<body>
    <h1>JUMP UP!!!</h1>
    <h3>Select START to begin the game.</h3>
    <script src="Game_page.js"></script>
    <div class="container">
        <div class="column">
            <li><a href="Instructions.html">Instructions</a></li>
            <li><a href="Start.html">Start</a></li>
            <li><a href="Score.html">Score</a></li>
            <li><a href="End.html">End</a></li>
        </div>
    </div>
</body>