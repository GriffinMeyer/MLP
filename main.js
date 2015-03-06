var key = [];

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var mousePosition = {
	x: 0,
	y: 0
};

var mousePressed = false;

    canvas.addEventListener('mousemove', function(event)
    {
      mousePosition.x = event.offsetX || event.layerX;
      mousePosition.y = event.offsetY || event.layerY;
    });

    canvas.addEventListener('mousedown', function(event) 
    {
      mousePressed = true;
     
    });
    canvas.addEventListener('mouseup', function(event) 
    {

      mousePressed = false;
    });
    window.addEventListener('keypress',function(event)
    {
    	 key = event.which || event.keyCode;
    	if(119 == key)
    	{
    		paused = true;
    	}
    	
    });

var key;
var paused = false;
var gameState = "off";
var startButton;
var playButton;
var returnMainMenuButton;
var creditButton;
var mainMenu;
var pauseMenu;
var creditMenu;

// not yet ready, just messing with a sprite sheet for the menu 
function createMenus()
{
	//draw Main Menu
    startButton = new Button("Start Button","Game Images/StartButton.png",100,0,50,100);
    creditButton = new Button("Credit Button","Game Images/highScoreButton.png",100,100,50,100);
    returnMainMenuButton = new Button("Return Button","Game Images/returnButton.png",100,150,50,100);
    playButton = new Button("Play","Game Images/playButton.png",100,150,50,100);
    mainMenu = new Menu("Main Menu");
    pauseMenu = new Menu("Pause Menu");
    creditMenu = new Menu("Credit Menu");
	
	mainMenu.addItem(startButton);
	mainMenu.addItem(creditButton);
	
	
	
	creditMenu.addItem(returnMainMenuButton);
	
	
	pauseMenu.addItem(playButton);
}

function startGame()
{
	gameState = 'on';
}

function loadGame()
{
	var playing = false;
	createMenus();
	setInterval(function()
	{
		if(gameState == "off" && mainMenu.isEnabled())
		{
			mainMenu.draw();
		}
		if(startButton.isEnabled() && startButton.isClicked)
		{
			mainMenu.clear();
			gameState = "on";
		}
		if(creditButton.isEnabled() && creditButton.isClicked)
		{
		    mainMenu.clear();
			creditMenu.draw();
		}
		if(returnMainMenuButton.isEnabled() && returnMainMenuButton.isClicked)
		{
			pauseMenu.clear();
			mainMenu.draw();
		}
		if(playButton.isEnabled() && playButton.isClicked)
		{
			pauseMenu.draw();
		}
		creditButton.update();
		startButton.update();
		returnMainMenuButton.update();
		playButton.update();

		 if(paused == true && gameState != "off")
	     {
			gameState = "paused";
			playing = false;
			pauseMenu.draw();
		 }
	
		
	 	if(gameState == "on" && !playing)
		{
			Game();
	     /*
		 * 
		 * 
		 * Game stuff 
		 * 
		 * 
		 */
			playing = true;
		}
		
		},5);
		
	
}



