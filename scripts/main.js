

var canvas=document.getElementById("canvas");
//var backCanvas=document.getElementById("background");
//var ctx2=canvas.getContext("2d");
var ctx=canvas.getContext("2d");
var mousePosition =
 {
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

// level

var level = 1;

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
var levelq = [];
var playing = false;
var smallMeteor;
var smallMeteor2;
var smallMeteor3;
var largeMeteor;
// load levels for game 


function loadImages()
{
	// load small meteor image
	smallMeteor = new Sprite("images/meteors/Meteor.png",0,0,50,50);
	smallMeteor2 = new Sprite("images/meteors/Meteor.png",100,200,50,50);
	smallMeteor3 = new Sprite("images/meteors/Meteor.png",200,200,50,50);
	largeMeteor = new Sprite("images/meteors/Meteor.png",0,0,70,70);
	
}


// this is were we will create the levels and push them to the level array and draw them when needed
function loadLevels()
{
	// creates lvl1 
	var lvl1 = new Level("level 1", 1200,800);
	// add boundary image
	lvl1.addBoundary(largeMeteor);
	
	// add meteors to level
	lvl1.addMeteor(new Meteor(smallMeteor2));
	lvl1.addMeteor(new Meteor(smallMeteor3));
	
	// add background to level
	lvl1.background = background;
	
	//level.push(lvl1);
}

function createBackground()
{
	background = new Background("images/background/background.png");
	background.getContext(ctx,canvas.width,canvas.height);
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
	makeBoundary();
	//loadLevels();
	initMeteors(level);
	randEvent();
	background.draw();
	startGame();
		mainMenu.draw();
	
}

function startGame()
{
	console.log("drawing menu");
	
	setInterval(function()
	{
	//	level[0].draw();
		if(gameState == "off" && mainMenu.enabled )
		{
			
			console.log("drawing main menu");
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
	 	if(gameState == "on" && !playing)
		{    
			game();
		    playing = true;
		}
		},5);
}


