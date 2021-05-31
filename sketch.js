const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, player1Img, p1, p2;
var playerCount=0, gameState=0;
var form, game, player;
var allPlayers, goal=0, form;


var playerCount=0, gameState=0;
//var form, game, player;

function preload(){
bg=loadImage("Img/bng.png")
player1Img=loadImage("Img/p1.png")

}


function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
  
   
    
   
  database = firebase.database();
  console.log(database);
  game=new Game()
  game.getState()
  game.start()
  
  
}

function draw(){
  //background("black");
  Engine.update(engine);
  background(bg)
    
  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
  //  clear();
    game.play();

  }

//form.display();

 
}


