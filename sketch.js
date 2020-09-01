//Create variables here
var pet;
var database,position;
function preload()
{pet=add.Image(dogImg.png);
  pet1=add.Image(dogImg.png);
	//load images here
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  var locationOfChild  =  database.ref("pet/position")
  locationOfChild.on("value",readOp,showErr);
  var pet=createpet(250,250,10,10);
  pet.shapecolour="green";
  
}


function draw() {  
background = ("white");
if (keyWWentDown(UP_ARROW)){
  writeStoke(foodS)
  pet.addImage(dogHappy)
}
  drawSprites();
  //add styles here

}
function changePosition(x,y){
  pet.x = pet.x + x;
  pet.y = pet.y + y;
}

function readOp(data){
  position = data.val();
pet.x = position.x;
pet.y = position.y;
}

function showErr(){
  console.log("error");
}

function readStoke(data){
  foodS-data.val();
}
function writeStoke(x){
  database.ref('/').update();
  if (x<=0){
    x=0;
  }else(x=x-1)
}
