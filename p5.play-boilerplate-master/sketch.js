var balloon,balloonPosition,position;
var database;

function setup() {

  database = firebase.database();

  createCanvas(500,500);

  balloon=createSprite(650, 200, 50, 50);

   var balloonPosition = database.ref('balloon/position');
   balloonPosition.on("value", readPosition, showError);


}

function draw() {
  background(255,255,255);  

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}
drawSprites();

}

function writePosition(x,y){
  database.ref('balloon/position').set(
      {
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){

  position = data.val();
 
  balloon.x = position.x;
   balloon.y = position.y;
 
 }

 function showError(){
  console.log("Error in writing to the database");
}