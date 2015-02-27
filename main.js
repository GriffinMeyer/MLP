var MenuButton = function(imageUrl,  Xposition, Yposition)
{
	console.log("url is: " +  imageUrl);
	this.img = new Image();
	this.img.src = imageUrl;
	this.framIndex = 0;
	this.frameWidth = 50;
	this.height = 50;
	this.width = 50;
	this.x = Xposition;
	this.y = Yposition;
}
function drawMenuSprite(menuSprite)
{
		ctx.drawImage(
			startButton.img,
			1* menuSprite.frameWidth,   // image clipping x
			0,				      // image clipping Y
			menuSprite.width,           // width of the image clipped
			menuSprite.height,          // height of the image clipped
			menuSprite.x,                             // x coordinate to place image
			menuSprite.y,                             // y coordinate to place image
			menuSprite.width,           // stretch image to this X point
			menuSprite.height           // stretch image to this Y point
		);
}


var gamestate = "false";
var ct1 = document.getElementById("canvas");

var startButton = new MenuButton("gameMenuSpriteSheet.png",50,50);
var pauseButton = new MenuButton("gameMenuSpriteSheet.ong",50,50);
var highScoreButton = new MenuButton("gameMenuSpriteSheet.ong",50,50);
var CreditsButton = new MenuButton("gameMenuSpriteSheet.ong",50,50);

// not yet ready, just messing with a sprite sheet for the menu 
function drawMainMenu()
{
	
	    //draws the Title Screen
	    
	    // draws start button
	    drawMenuSprite(startButton);
	    
		console.log("drawing menu");
		
		// draws the credits button
	
		// draws the highscore button 
}

function checkMenuClick(menuButton, x, y)
{
	var minX = menuButton.x;
	var minY = menuButton.y;
	var maxX = menuButton.x + menuButton.width;
	var maxY = menuButton.y + menuButton.height;
	console.log("minX: " + minX + " minY: " + minY + " maxX: " + maxX + " MaxY: " + maxY);
	if(x >= minX && x <= maxX && y >= minY && y <= maxY)
	{
    //Point is inside the sprite's bounds
      return true;
    }

	console.log("not in range !");
	return false;
}
canvas.addEventListener("click", function(e)
{
	console.log("coordinates are: " +  e.clientX + " and " + e.clientY);
	 if(gamestate == "false")
	 {
 		
 		if(checkMenuClick(startButton,e.clientX,e.clientY))
 		{
 			 startGame();
 			 gamestate = "true";
 		}
 	
 	
 			
	 }
	
	
})



function gameMainMenu()
{
	drawMainMenu();
	//startGame();
}


function gameHighScores()
{
	
}

function gameCredits()
{
	
}


function loadGame()
{
	console.log("game has started ");
	gameMainMenu();
	
//	drawMainMenu();
}


