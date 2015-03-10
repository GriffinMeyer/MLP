 


function Background(image) {
	
	this.background = new Image();
	this.background.onload = this.onImageLoad;
	this.background.src = image;
	this.x = 0;
	this.y = 0;
	this.canvasHeight = 0;
	this.canvasWidth = 0;
	// speed at per pixel 
	this.speed = 1; 
	// Implement abstract function
	// animate background 
	this.scrollLeft = false;
	this.scrollRight = false;
	this.scrollDown = false;
	this.scrollUp = false;
}

Background.prototype.onImageLoad = function()
{
	console.log("image loaded");
}

Background.prototype.scrollToLeft = function()
{
	this.scrollRight = false;
	this.scrollLeft = true;
}

Background.prototype.scrollToRight = function()
{
	this.scrollRight = true;
	this.scrollLeft = false;
}

Background.prototype.scrollUpward = function()
{
	this.scrollUp = true;
	this.scrollDown = false;
}

Background.prototype.scrollDownward = function()
{
	this.scrollUp = false;
	this.scrollDown = true;
}
Background.prototype.getContext = function(context, width, height)
{
	//console.log("canvas width: " + (this.x - width) + "height: " + height);
	this.context = context;
	this.canvasWidth = width;
	this.canvasHeight = height;	
	
}

Background.prototype.setSpeed = function(speed)
{
	this.speed = speed;
}

Background.prototype.draw = function()
{
	
	if(this.scrollLeft)
	{
		this.x += this.speed;
		this.context.drawImage(this.background, this.x, this.y);
	    this.context.drawImage(this.background, this.x - this.canvasWidth, this.y);
	}
	if(this.scrollRight)
	{
		this.x -= this.speed;
		this.context.drawImage(this.background, this.x, this.y);
	    this.context.drawImage(this.background, this.x + this.canvasWidth, this.y);
	}
	if(this.scrollUp)
	{
		this.y -= this.speed;
		this.context.drawImage(this.background, this.x, this.y);
	    this.context.drawImage(this.background, this.x, this.y + this.canvasHeight);
	}
	if(this.scrollDown)
	{
		this.y += this.speed; 
		this.context.drawImage(this.background, this.x, this.y);
	    this.context.drawImage(this.background, this.x, this.y - this.canvasHeight);
	}
	
	
	if(Math.abs(this.x) >= this.canvasWidth)
	{ 
		console.log("reached the end")
		this.x = 0;
	}
	if(Math.abs(this.y) >= this.canvasWidth)
	{ 
		console.log("reached the end")
		this.x = 0;
	}
	
	
}


