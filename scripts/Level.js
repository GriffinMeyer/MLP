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
	this.player = player;
	
	
	// defines the boundarys of the level
	this.width = width;
	this.height = height;
	
	
	// add objects for the game including enemies or scenery
	this.meteor = [];
	
	
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

Level.prototype.addMeteor = function(meteor)
{
	this.meteor.push(meteor);
}

// update level 
Level.prototype.update = function(player)
{
	this.background.setSpeed(player.x,player.y);
	
	// check Collision with player with Meteor ..
	// for(var i = 0; i < this.meteor.length; i++)
	// {
		// this.meteor[i].checkCollision(player);
	// }
	
	
	// check collision with player and boundary...
	// this.boundary.checkCollision(player); 
	
}



// draws the boundaries of the level with the specified object
Level.prototype.drawBoundary = function()
{
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
}


// draws all the meteors that were added to the level
Level.prototype.drawMeteors = function()
{
	console.log("number of meteors in level: " + this.meteor.length);
	for(var i = 0; i < this.meteor.length; i++)
	{
		this.meteor[i].draw();
	}
}

Level.prototype.draw = function()
{
	// Draw the boundary with images if 
	this.background.draw();
	
	// draw Boundary
	this.drawBoundary();
	this.drawMeteors();
	// draw player position
	//player.draw();
	
	
	
}




