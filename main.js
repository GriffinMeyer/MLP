var menuSpriteMap = new Image();
menuSpriteMap.src = "gameMenuSpriteSheet.png";
menuSpriteMap.frameIndex = 0;
menuSpriteMap.width = 50;
menuSpriteMap.height = 50;
menuSpriteMap.frameWidth = 50;

// not yet ready, just messing with a sprite sheet for the menu 
function drawMainMenu()
{
	    //draws the Title Screen
		console.log("drawing menu");
		// draws the start game button
			ctx.drawImage(
			menuSpriteMap,
			1* menuSpriteMap.frameWidth, 
			0,
			menuSpriteMap.width,
			menuSpriteMap.height,
			0,
			0,
			menuSpriteMap.width,
			menuSpriteMap.height
			 );
		// draws the credits button
	
		// draws the highscore button 
}


function sprite(options)
{
	var spriteObject = {};
//	spriteObject = options.context;
	spriteObject = options.width;
	spriteObject = options.height;
	spriteObject = options.image;
	return spriteObject;
}

document.addEventListener("click", function()
{
	startGame();
})




function gameMainMenu()
{
	drawMainMenu();
	startGame();
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


