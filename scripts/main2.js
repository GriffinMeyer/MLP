

var canvas=document.getElementById("canvas");
var backCanvas=document.getElementById("background");
var ctx2=canvas.getContext("2d");
var ctx=canvas.getContext("2d");

var key = [];
var mousePosition =
 {
	x: 0,
	y: 0
};

var controlFlip = false;
var modeLock = false;
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



// controls for player
function controls()
{
	//If you only want the function to happen once per keypress
	//Put it within the document.onkeydown functions
	//else, if you want something like continues movement
	//while a key is pressed, put it outside the functions.
	//check keyup
	document.onkeydown=function(e)
	{
	    code=window.event?e.keyCode:e.which;
	    key[code]=1;
	};
	
	//Key down Checking Function
	document.onkeyup=function(e)
	{
		code=window.event?e.keyCode:e.which;
		key[code] = 0;
		//Mode Switch
		if(code == 27)
		{
		
			if(paused == false)
			{
				paused = true;
			}
			else
			{
				paused = false;
			}
			
		}
		if(code == 90 && !paused)
		{	
			if(!modeLock)
			{
			player.modeSwitch();
			}
		}
		
	};
	
	
	//For movement
	//left
	if(key[37])
	{
		if(player.energy > 0)
		{
			if(controlFlip == true)
			{
				player.dirVelocity("right");
			}
			if(controlFlip == false)
			{
				player.dirVelocity("left");	
			}
		}
		
	}
	//right
	if(key[39])
	{
		if(player.energy > 0)
		{
			if(controlFlip == true)
			{
				player.dirVelocity("left");
			}
			if(controlFlip == false)
			{
				player.dirVelocity("right");
			}
		}
	}
	
	// removed distance to Xena temporarily 
	//up
	if(key[38])
	{
		if(player.energy > 0)
		{
			if(controlFlip == true)
			{
				player.dirVelocity("down");
			}
			if(controlFlip == false)
			{
				player.dirVelocity("up");
			}
		
		}
	}
	//down
	if(key[40])
	{
		if(player.energy > 0)
		{
			if(controlFlip == true)
			{
				player.dirVelocity("up");
					
			}
			if(controlFlip == false)
			{
				player.dirVelocity("down");
			}
		
		}
	}
}



var keys;
var gameState = "off";
var paused = false;
var startButton;
var playButton;
var returnMainMenuButton;
var creditButton;
var mainMenu;
var pauseMenu;
var creditMenu;
var titleImage;
var background;
var level = [];
var playing = false;
var smallMeteor;
var smallMeteor2;
var smallMeteor3;

var largeMeteor;

// Phil
var player;
var playerImage;
// load levels for game 



function loadImages()
{
	// load small meteor image
	smallMeteor = new Sprite("images/meteors/Meteor.png",0,0,50,50);
	smallMeteor2 = new Sprite("images/meteors/Meteor.png",100,200,50,50);
	smallMeteor3 = new Sprite("images/meteors/Meteor.png",200,200,50,50);
	largeMeteor = new Sprite("images/meteors/Meteor.png",0,0,70,70);
	
	// load image for Phil
	playerImage = new Sprite("images/phil/Phil (Default).png",canvas.width/2, canvas.height/2,100,100)
	
}



// this is were we will create the levels and push them to the level array and draw them when needed
function loadLevels()
{
	player = new Phil(playerImage);
	// creates lvl1 
	var lvl1 = new Level("level 1", player, 1200,800);
	// add boundary image
	lvl1.addBoundary(largeMeteor);
	
	// add meteors to level
	lvl1.addMeteor(new Meteor(smallMeteor2));
	lvl1.addMeteor(new Meteor(smallMeteor3));
	
	// add background to level
	lvl1.background = background;
	
	level.push(lvl1);
}

function createBackground()
{
	background = new Background("images/background/background.png");
	background.getContext(ctx2,backCanvas.width,backCanvas.height);
}
// not yet ready, just messing with a sprite sheet for the menu 
function createMenus()
{
	//draw Buttons needed for Menu
    startButton = new Button("Start Button","images/menu/Button(StartGame).png",360,408,148,473);
    creditButton = new Button("Credit Button","images/menu/Button(Credits).png",360,570,149,475);
    returnButton = new Button("Return Button","images/menu/Button(Return).png",360,570,149,475);
    
    //draw images needed for menu
    titleImage = new Sprite("images/menu/title.png",270,18,360,702);
    
    playButton = new Button("Play","images/menu/Button(Return).png",360,570,149,475);
    mainMenu = new Menu("Main Menu");
    pauseMenu = new Menu("Pause Menu");
    creditMenu = new Menu("Credit Menu");
	
	// adding items to the main menu
	mainMenu.addItem(startButton);
	mainMenu.addItem(creditButton);
	mainMenu.addItem(titleImage);
	
	
	// adding items to the credit menu
	creditMenu.addItem(titleImage);
	creditMenu.addItem(returnButton);
	
	// adding items to the pause menu
	pauseMenu.addItem(playButton);
}

function pauseGame()
{
	console.log("paused game");
	pauseMenu.draw();
	paused = true;
}

function loadGame()
{
	loadImages();
	console.log("loaded game");
	createMenus();
	createBackground();
	//makeBoundary();
	loadLevels();
	//initMeteors();
	randEvent();
	background.draw();
	startGame();
		
	
}

function startGame()
{
	console.log("drawing menu");
	background.draw();
	setInterval(function()
	{
		
		if(gameState == "off" && mainMenu.enabled )
		{
			
			mainMenu.draw();
		}
		if(startButton.inputEnabled && startButton.isClicked)
		{
			mainMenu.clear();
			gameState = "on";
		}
		if(creditButton.inputEnabled && creditButton.isClicked)
		{
			//console.log("drawing main menu");
		    mainMenu.clear();
		    background.draw();
			creditMenu.draw();
		}
		if(returnButton.inputEnabled && returnButton.isClicked)
		{
			creditMenu.clear();
			background.draw();
			mainMenu.draw();
		}
		if(paused)
		{
			pauseMenu.draw();
		}
		if(playButton.inputEnabled && playButton.isClicked)
		{
			console.log("play button pressed");
			pauseMenu.clear();
			paused = false;
		}
		creditButton.update();
		startButton.update();
		returnButton.update();
		playButton.update();
		
// commented out game() so the game wont start, its still not ready yet 
	 	if(gameState == "on")
		{    
		
			//game();
			controls();
			level[0].update(player);
			level[0].draw();
			
		   // playing = true;
		}
		},5);
}


// generates random event
function randEvent(){
	setInterval(function(){
		var random = Math.round(Math.random());
		if(random == 0){
			console.log("0");
			controlFlip = true;
			eventPopped = true;
			eventTriggered = "controlFlip";
			setTimeout(function(){
			controlFlip = false;
			}, 10000);
			
		}
		if(random == 1){
			console.log("1");
			modeLock = true;
			eventPopped = true;
			eventTriggered = "modeLocked";
			console.log(modeLock);
			setTimeout(function(){
				modeLock = false;
			}, 5000);
		}
	},30000);
}

function statBars(){
	//red to draw health
	ctx.fillStyle = "red";
	ctx.fillRect((canvas.width/2)-(energy*6)/2,canvas.height-10,energy*6, 10);
	ctx.fillStyle = "blue";
	ctx.fillRect((canvas.width/2)-(shield*6)/2,canvas.height-20,shield*6, 10);
	ctx.fillStyle = "green";
	ctx.fillRect((canvas.width/2)-(health*6)/2,canvas.height-30,health*6, 10);
	//back to black
	ctx.fillStyle = "black";
	
}


