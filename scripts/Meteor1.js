function Meteor(sprite)
{
	this.x = sprite.x;
	this.y = sprite.y;
	this.width = sprite.width;
	this.height = sprite.height;
	this.sprite = sprite;
	
	// set speed at which the meteor moves
	this.speed = 0;
	
	// set size of metoer
	this.size = 1;
	
	// set damage for Meteor default is 10
	this.damage = 0;

}

// inherit properties from Sprite
//Meteor.prototype = new Sprite();


// Physics of Meteor 

// return the damage reflected onto opposite object
Meteor.prototype.getDamage = function()
{
	return (this.damage * this.speed);
}



Meteor.prototype.reduceSpeed = function(objectHitSpeed)
{
	
}

Meteor.prototype.increaseSpeed = function()
{
	
}


// draws the meteor and overides the Sprite.draw() function
Meteor.prototype.draw = function()
{
	console.log("calling draw for Meteor");
	ctx.drawImage(this.sprite.img,this.x,this.y,this.width,this.height);
}


Meteor.prototype.checkCollision = function(object)
{
	
}
