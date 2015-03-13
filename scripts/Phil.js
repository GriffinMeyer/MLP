function Phil(sprite)
{
	this.sprite = sprite;
	this.x = sprite.x;
	this.y = sprite.y;
	this.width = sprite.width;
	this.height = sprite.height;
	// speed for Phil
	this.xvel = 0;
	this.yvel = 0;
	
	this.transX;
	this.transY;
	
	// max speed for Phil
	this.maxVel = 3;
	
	// acceleration for Phil
	this.acc = 0.01;
	
	// sets the health of Phil
	this.health = 100;
	this.maxHealth = 100;
	
	// sets the health of Phil
	this.shield = 100;
	this.maxShieldHealth = 100;
	
	// set the energy for Phil
	this.energy = 100;
	
	// boolean for mode
	// false if closed
	// true if opened
	this.opened = false;


	this.landerRotate = 0;
	
}


Phil.prototype.dirVelocity = function(dir)
{
	if(dir == "left"){
		if(this.xvel > -this.maxVel){
		this.energy -= .1;
		this.xvel -= this.acc;	
		}
		
	}
	if(dir == "right"){
		if(this.xvel < this.maxVel){
			this.energy -= .1;
			this.xvel += this.acc;
		}
		
	}
	if(dir == "up"){
		if(this.yvel > -this.maxVel){
			this.energy -= .1;
		this.yvel -= this.acc;	
		}
		
	}
	if(dir == "down"){
		if(this.yvel < this.maxVel){
			this.energy -= .1;
			this.yvel += this.acc;
		}
		
	}
}

// calculates the damage that Phil recieves in total
// it  checks the speed at which phill was going. If phils speed 
// is really high then more damage will be cause to Phil
// checks if shield is on or if its broken depending on whether it is 
// on or not Phil will get more damage or less damage from what was recieved

Phil.prototype.getDamage = function(damageRecieved)
{
	// calculate damage here
	
}



// sets the Phils position in the canvas, keep in mind 
// you can call the properties directly as well instead of
// using this function
Phil.prototype.setPosition = function(x,y)
{
	this.x = x;
	this.y = y;
}


Phil.prototype.update = function()
{
	
	//Updating virtual player location data
	player.transX += this.xvel;
	player.transY += this.yvel;
}


//draws the players location
Phil.prototype.draw = function()
{

	ctx.save();
	ctx.translate((canvas.width/2)+(this.width/2), (canvas.height/2)+this.height/2);
	ctx.rotate(-this.landerRotate*Math.PI/180);
	ctx.drawImage(this.sprite.img, this.x-canvas.width/2-this.width/2, this.y-canvas.height/2-this.height/2,this.width,this.height);
	ctx.restore();
}



// If Phil mode is switched to opened then when this funciton is called
// Phil shields will close. If modeLock = true then modeSwitch will do nothing
Phil.prototype.modeSwitch = function()
{
	
	if(this.opened)
	{
		this.opened = false;
		this.img.src = "images/phil/Phil (Default).png";
	}
	else
	{
		this.img.src = "images/phil/Phil (Open).png";
		this.opened = true;
	}
}


// regenerates Phils health and sheild
Phil.prototype.modeUpdate = function()
{
	if(this.opened)
	{
		if(this.energy <= 100)
		{
			this.energy += .5;
		}
		
		if(this.energy >= 100)
		{
			if(this.shield <=100)
			{
				this.shield +=.05;
			}
		}
		
	}
}


//
//Phil.prototype = new Sprite();

