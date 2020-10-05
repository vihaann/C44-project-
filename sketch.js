var PLAY = 1;
var END = 0;
var gameState = PLAY;



var castle,castleImg;
var backgroundI , backgroundIimg ; 
var boy;
var boyImg ; 
var  Coin , coinImg




function preload(){
  boyImg = loadAnimation("images/image.png");
  backgroundIimg = loadImage("images/forest.png");
  castleImg = loadImage("images/Castle.png");
  
}


function setup() {
  createCanvas(1500,1500);
  

   
  

 backgroundI = createSprite(650,350,3500,10000);
  backgroundI.addImage("background1",backgroundIimg);
  backgroundI.scale = 1.3 ;
  backgroundI.velocityX = -4 ;
  
  boy = createSprite(150,500,40,60);
  boy.addAnimation("boy1",boyImg);
  boy.scale = 0.5;
  

  castle = createSprite(1200,500,70,80);
  castle.addImage("castle1",castleImg);
  castle.scale = 0.5 ; 

}

function draw() {



  if(backgroundI.x < backgroundIimg.width/2){
    backgroundI.x = backgroundIimg.position.x
  }
  drawSprites();
  SpawnCoins();
    SpawnMonster();

}




    function SpawnCoins(){
            if (World.frameCount % 30 === 0) {
              Coin = createSprite(400,320,40,10);
              Coin.addImage("Coin",coinImg);
              Coin.scale = 0.5;
              Coin.velocityX = -3;
              
              Coin.lifetime = 134;
              CoinsGroup.add(Coin);

              
              
            }
            
          }

          
    function   SpawnMonster(){
        if (World.frameCount % 300 === 0) {
          var monster = createSprite(400,320,40,10);
          monster.addImage("Monster",monsterImg);
          monster.scale = 0.5;
          monster.velocityX = -4;
          
          monster.lifetime = 134;
          monstersGroup.add(monster);

          
          
          
        }
        
      }
          
    



  
  
 



  
  
    
  
  
  


