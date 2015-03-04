var key = [];

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");




var gamestate = "false";




// not yet ready, just messing with a sprite sheet for the menu 
function drawMainMenu()
{
	var startButton = new Button("Game Images/StartButton.png",100,0,50,100);
var returnButton = new Button("Game Images/returnButton.png",100,100,50,100);
var highScoreButton = new Button("Game Images/highScoreButton.png",100,50,50,100);

	startButton.draw();	
	returnButton.draw();

}
/*function checkMenuClick(menuButton, x, y)
{
//	console.log("scroll offset: " +  canvas.offsetHeight)
	var minX = menuButton.x;
	var minY = menuButton.y;
	var maxX = menuButton.x + menuButton.width;
	var maxY = menuButton.y + menuButton.height;
	//console.log("minX: " + minX + " minY: " + minY + " maxX: " + maxX + " MaxY: " + maxY);
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
//	console.log("coordinates are: " +  e.clientX + " and " + e.clientY);
console.log(display.length)
	 if(gamestate == "false")
	 {
 		
 		if(checkMenuClick(startButton,e.clientX,e.clientY) && display.length == 1)
 		{
 			console.log("clicked on start game");
 			 startGame();
 			 gamestate = "true";
 		}
 		
 		if(checkMenuClick(highScoreButton,e.clientX,e.clientY )&& display.length == 1)
 		{
 			console.log("clicked on highscores ");
 			 console.log(display.length);
 			 ctx.clearRect(0,0,canvas.width,canvas.width);
 			 display.push(displayHighScores());
 			 console.log(display.length);
 		}
 	    if(checkMenuClick(returnButton,e.clientX,e.clientY) && display.length > 1)
 		{
 			console.log("clicked on Return");
 			 ctx.clearRect(0,0,canvas.width,canvas.width); 
 			 display.pop();
 			  display.pop();
 			 console.log("popping" + display.length)
 			
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
	 console.log("in display highscores ");
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

*/
function loadGame()
{
	drawMainMenu();
}


