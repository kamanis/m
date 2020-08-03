var database,playerCount,form,player,game,gameState,player,track,cars1,cars2,cars3,cars4;
var allPlayer=[];
var cars=[];
var car1,car2,car3,car4;
var distance;
function preload(){
    track=loadImage("images/track.jpg");
    cars1=loadImage("images/car1.png");
    cars2=loadImage("images/car2.png");
    cars3=loadImage("images/car3.png");
    cars4=loadImage("images/car4.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    database=firebase.database();
    gameState=0;
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
    background("white");
   if(playerCount===4){
       game.update(1);

   }
   if(gameState===1){
       clear();
       game.play();
   }
   if(gameState===2){
       game.end();
    game.update(2);
   }
}