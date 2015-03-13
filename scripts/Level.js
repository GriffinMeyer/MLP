function Level(name,width, height)
{
	
	
    
    height = height || 0;
    width = width || 0;
    
	
	// level name
	this.levelname = name;
	
	
	// set foreground of level
	this.foreground = null;
	
	// set background of level
	this.background = null;
	
	
	// object controlled by user 
	//this.player = player;
	
	
	// defines the boundarys of the level
	this.width = width;
	this.height = height;
	
	
	// add objects for the game including enemies or scenery
	this.levelSprites = [];
	
	
	// add a boundary comprised of images around the level
	this.enableBoundary = false;

	
	// set to true if you want to have a time limit on level completion
	this.timeout = false;
	this.time = 0;
	
	
	// adds level music if needed 
	this.sound = null;
	
	
	// keeps track of whether the level has been completed
	// false for completed
	// true for completed
	this.state = false;
}


// inherits Sprite Class 
Level.prototype.addBoundary = function(sprite)
{
	this.enableBoundary = true;
	this.boundary = sprite;
	
}


// update level 
Level.prototype.update = function()
{
	this.background.setSpeed(player.x,player.y);
}

Level.prototype.draw = function()
{
	// Draw the boundary with images if 
	this.background.draw();
	if(this.enableBoundary == true)
	{
		//drawing top and bottom boundaries 
		for(var i = 0; i < ((this.width - this.boundary.width)/this.boundary.width); i++)
		{
			console.log("drawing border")
	    	// top
			ctx.drawImage(this.boundary.img, this.boundary.width * i, 0, this.boundary.width, this.boundary.height);
			//bottom
			ctx.drawImage(this.boundary.img, this.boundary.width * i, this.height - this.boundary.height, this.boundary.width, this.boundary.height);
		}
		// draws Left boundary and right boundarues
		for(var i = 0; i < ((this.height - this.boundary.height)/this.boundary.height); i++)
		{
			// draw Left
			ctx.drawImage(this.boundary.img, 0, i * this.boundary.height, this.boundary.width, this.boundary.height);
			// draw Right
			ctx.drawImage(this.boundary.img, this.width - this.boundary.width, i * this.boundary.height, this.boundary.width, this.boundary.height);
			
		}
	}
	
	// draw foreground 
	// this.forground.draw();
	
	// draw background
	
	
	
}


Level.prototype.createBoundary = function()
{
	//top
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,0, 50,50, "images/meteors/Meteor.png"));

	}
	//bottom
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,roomY, 50,50, "images/meteors/Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++){
		boundary.push(new meteor(0,i*50,50,50,"images/meteors/Meteor.png"));
		
	}
}

