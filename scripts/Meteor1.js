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

Meteor.prototype.draw = function()
{
	ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}
