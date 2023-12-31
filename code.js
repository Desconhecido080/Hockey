var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

var playerScore=0;
var compScore=0;

var gameState ="iniciar";



function draw() {
 background("gray")
 
  if (gameState === "iniciar"){
  textFont("Courier New");
  fill("Cyan");
 textSize(25);
  text('Pressione a tecla "espaço" \n para iniciar ' ,20, 179);
  
   if (keyDown("space")){
serve();
gameState = "jogar"; 
  }
  }
  if (gameState == "jogar"){
    textSize(18);
  fill("maroon");
  text(playerScore, 25,225);
  text(compScore,25,185);
  
   if(striker.isTouching(goal1))
      { 
        playerScore +=1 ;
        striker.x=192;
        striker.y=220;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {
        compScore += 1;
        striker.x=186;
        striker.y=324;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
   
      if(playerScore === 5)
       
      {
        fill("maroon");
        textSize(25);
        
        text("ganhador player 2 "  ,170,160);
        
        
      }
    if (keyDown("space")){
      serve();
    }
     
     computerMallet.x = striker.x;
     
     
     
     createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

       for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  paddleMovement();
  
  }
  
  if (playerScore === 5 || compScore ===5){
    gameState = "fim";
  }
 
  if (gameState == "fim"){
    stroke("red");
    fill("red");
    textSize(25);
    text('Aperte "enter" \n para recomeçar',105,153);
    
    if (keyDown(ENTER)){
      playerScore = 0;
      compScore = 0;
      gameState = "iniciar"
    }
  }
  
  drawSprites();
  
}
function serve (){
 striker.setVelocity(5,10);
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
} 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
