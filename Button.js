

function Button(imgURL, x, y, height, width)
{

	this.img = new Image();
	this.img.src = imgURL;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}


//-----------------Accesor Functions--------------------

Button.prototype.getHeight = function()
{
	return this.height;
}


Button.prototype.getWidth = function()
{
	return this.width;
}

Button.prototype.x = function()
{
	return x;
}

Button.prototype.y = function()
{
	return y;
}
//------------------Setter Functions--------------------

Button.prototype.setwidth = function(setWidth)
{
	this.width = setWidth;
}

Button.prototype.setHeight = function(setHeight)
{
	this.height = setHeight;
}

Button.prototype.setImage = function(setImageUrl)
{
	this.img.src = setImageUrl;
}

Button.prototype.setX = function(setX)
{
	this.x = setX;
}

Button.prototype.setY = function(setY)
{
	this.y = setY;
}



//---------------- Manipulation Funcitons-------------
Button.prototype.draw = function()
{
	ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height
		);
}

console.log("loading Button.js");

