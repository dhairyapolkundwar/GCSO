var F1Car, TestWall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  TestWall = createSprite(1300, 200, 60, 100)
  TestWall.shapeColor = color(80,80,80)
  
  F1Car = createSprite(100, 200, 25, 25);
  F1Car.shapeColor = color(255, 255, 255)

  speed = Math.round(random(50, 90))
  weight = Math.round(random(1200, 2000))
}
function draw() {
  background(0,0,0);
    F1Car.velocityX = speed
    drawSprites();
    Hit();
    
}

function Hit(){
  if(TestWall.x-F1Car.x < (F1Car.width+TestWall.width)/2){
    F1Car.velocityX = 0;
    var Damage = 0.5 * weight * speed * speed/22500

    if(Damage>180){
      F1Car.shapeColor = color(255, 0, 0);
    }
    if(Damage<180 && Damage>100){
      F1Car.shapeColor = color(255, 255, 0);
    }

    if(Damage<100){
      F1Car.shapeColor = color(0, 255, 0);
    }
  }

  

}