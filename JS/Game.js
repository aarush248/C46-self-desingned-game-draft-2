class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        p1=createSprite(50, 365)
        p1.addImage(player1Img)
        
    drawSprites();
    }
    
   
      play(){
        form.hide();
        
        Player.getPlayerInfo();
        
        
       // if(allPlayers !== undefined){
          
          //var display_position = 100;
          
          //index of the array
         // var index = 0;
    
          //x and y position of the cars
         // var x = 175 ;
          //var y;
    
          //for(var plr in allPlayers){
            //add 1 to the index for every loop
           // index = index + 1 ;
    
            //position the cars a little away from each other in x direction
           // x = x + 200;
            //use data form the database to display the cars in y direction
         //   y = displayHeight - allPlayers[plr].distance;
            //cars[index-1].x = x;
            //cars[index-1].y = y;
    
           /* if (index === player.index){
              stroke(10)
              fill("green")
              ellipse(x, y, 80, 120)
              push();
              fill("white")
              textSize(24)
              text(allPlayers[plr].name, cars[index-1].x-30, cars[index-1].y+95)
              pop();
              cars[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;
            }*/
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          //}
    
      //  }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
    
        if(player.distance > 3860){
          player.rank=player.rank+1
          Player.updateCars(player.rank)
          gameState = 2;
        }
       
        drawSprites();
      }
    
      /*end(){
        var endMs=createElement("h2")
        endMs.position(displayWidth/2-25, displayHeight/2-50)
        endMs.style.color="white"
       // fill("white")
        endMs.html("Congratulations! No. "+player.rank+" Winner!")
        console.log(player.rank)
        //text("Game Ended", displayWidth/2-50, displayHeight/2);
      }*/
     
    }