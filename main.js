var MenuButton = function(imageUrl,Xposition,Yposition, height, width)
{
	console.log("url is: " +  imageUrl);
	this.img = new Image();
	this.x = Xposition;
	this.y = Yposition;
	this.img.src = imageUrl;
	this.height = height;
	this.width = width;
}


function drawMenuSprite(menuSprite)
{
	ctx.drawImage(menuSprite.img,menuSprite.x,menuSprite.y,menuSprite.width,menuSprite.height);
}


var gamestate = "false";
var ct1 = document.getElementById("canvas");

var startButton = new MenuButton("Game Images/StartButton.png",100,0,50,100);
var returnButton = new MenuButton("Game Images/returnButton.png",100,50,50,100);
var highScoreButton = new MenuButton("Game Images/highScoreButton.png",100,50,50,100);

var display = [];


//var creditsButton = new MenuButton("gameMenuSpriteSheet.ong",50,50);
//var returnButton = new MenuButton ("gameMenuSpriteSheet.ong",50,50);


// not yet ready, just messing with a sprite sheet for the menu 
function drawMainMenu()
{
	
	    //draws the Title Screen
	    
	    // draws start button
	    drawMenuSprite(startButton);
	    
	    // draws the highscore button 
	    drawMenuSprite(highScoreButton);
		
		// draws the credits button
}

function checkMenuClick(menuButton, x, y)
{
	console.log("scroll offset: " +  canvas.offsetHeight)
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
 		if(checkMenuClick(returnButton,e.clientX,e.clientY))
 		{
 			 ctx.clearRect(0,0,canvas.width,canvas.width); 
 			 display.pop();
 			 console.log(display)
 			
 		}
 		if(checkMenuClick(highScoreButton,e.clientX,e.clientY))
 		{
 			 ctx.clearRect(0,0,canvas.width,canvas.width);
 			 display.push(displayHighScores());
 		}
 					
	 }
	
})

function clearScreen()
{
	
}

function displayCredits()
{
		drawMenuSprite(returnButton);
}


function displayHighScores()
{	
	
	drawMenuSprite(returnButton);	
}


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
    display.push(drawMainMenu());
	
}


