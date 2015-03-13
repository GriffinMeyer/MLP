function Level(name, player,width, height)
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
	this.boundaryMade = false;
	this.boundary = [];
	this.boundaryImage = null;
	
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
	this.boundaryImage = sprite;
	
}

Level.prototype.addMeteor = function(meteor)
{
	this.meteor.push(meteor);
}

// update level 
Level.prototype.update = function()
{
	
//	console.log("updating player location to x: " + this.player.xvel + " y: " + this.player.yvel)
	this.player.update();
	this.background.setSpeed(this.player.xvel,this.player.yvel);
	this.background.getDirection();
	// check Collision with player with Meteor ..
	// for(var i = 0; i < this.meteor.length; i++)
	// {
		// this.meteor[i].checkCollision(player);
	// }
	
	
	// check collision with player and boundary...
	//this.checkBoundaryCollision(); 
	  this.checkBoundaryCollision();
}




// draws the boundaries of the level with the specified object
// it also  updates the boundary that surronds the level
Level.prototype.makeBoundary = function()
{
	if(this.boundaryMade)
	{
		return;
	}
	
	// makes top and bottom boundaries 
	for(var i = 0; i < ((this.width - this.boundaryImage.width)/this.boundaryImage.width); i++)
	{
	//	console.log("adding sprites");
    	// top
		this.boundary.push(new Sprite (this.boundaryImage.img.src, (this.boundaryImage.width * i) , 0 , this.boundaryImage.width, this.boundaryImage.height));
		//bottom
	//	console.log("adding sprites");
		this.boundary.push(new Sprite (this.boundaryImage.img.src, (this.boundaryImage.width * i) , (this.height - this.boundaryImage.height), this.boundaryImage.width, this.boundaryImage.height));
	}
	// makes Left boundary and right boundarues
	for(var i = 0; i < ((this.height - this.boundaryImage.height)/this.boundaryImage.height); i++)
	{
		console.log("adding sprites");
		// draw Left
		this.boundary.push(new Sprite (this.boundaryImage.img.src, 0 , (i * this.boundaryImage.height), this.boundaryImage.width, this.boundaryImage.height));
		// draw Right
		//console.log("adding sprites");
		this.boundary.push(new Sprite (this.boundaryImage.img.src, this.width - this.boundaryImage.width , (i * this.boundaryImage.height), this.boundaryImage.width, this.boundaryImage.height));
		
	}
	this.boundaryMade = true;
}

// draws Boundary
Level.prototype.drawBoundary = function()
{

		if(this.enableBoundary == true)
		{
		//	console.log("number of meteors: " + this.boundary.length)
			//drawing top and bottom boundaries 
			for(var i = 0; i < this.boundary.length; i++)
			{
				
				var obj = this.boundary[i];
				obj.x -= this.player.xvel;
				obj.y -= this.player.yvel;
				ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
			}
		}
}

// draws all the meteors that were added to the level
Level.prototype.drawMeteors = function()
{
	for(var i = 0; i < this.meteor.length; i++)
	{
		this.meteor[i].draw();
	}
}

Level.prototype.draw = function()
{
	// Draw the boundary with images if 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
	this.background.draw();
	
	player.draw();
	
	// draw Boundary
	this.makeBoundary();
	this.drawBoundary();
	this.drawMeteors();
	// draw player position
	
}




Level.prototype.checkBoundaryCollision = function()
{
console.log("checking boundary collision");
	if(this.player.transX+this.player.width> this.width || this.player.transX-this.player.width/2 < 0)
	{
		this.player.xvel = -this.player.xvel;
	}
	if(this.player.transY + this.player.height > this.height || this.player.transY-player.height/2 < 0)
	{
		this.player.yvel = -this.player.yvel;
	}
}



