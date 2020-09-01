feed = createButton("FEED THE DOG");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood = createButton("ADD FOOD");
addFood.position(800,95);
addFood.mousePressed(addFoods);

function draw(){
fill(255,255,254);
textsize(15);
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
    lastFed = data.val();
});
if(lastFed>=12){
    text("LAST FEED:"+lastFed % 12 + "PH",350,30);
}else if(lastFed === 0){
    text("LAST FEED: 12 AM",350,30);
}else{
    text("LAST FEED:"+lastFed  + "AM",350,30);
}
foodStoke=database.ref('food') 
foodstoke.on("value",readStoke)
display()
    var x = 80,y = 100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock|=0){
        for(var i=0;i<this.foodStoke;i++){
            if(i%10==0){
                x=80;
                y = y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
 function feedDog(){
     feedDog.addImage(happyDog);
     foodObj.updateFoodStoke(foodObj.getFoodStock()-1);
     FeedTime:hour();
 }
 function addFood(){
     FoodS++;
     database.ref('/').update({
         Food:foodS
     })
    }