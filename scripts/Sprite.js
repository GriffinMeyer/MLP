function Sprite(image, x, y) 
	// if x and y are not given a value then default value will be 0
	x = x || 0;
    y = y || 0;
    
    this.img = new Image();
	this.img.src = imgURL;
	
	// set x coordinate position 
	this.x = x;
	
	// set y coordinate position
	this.y = y;
	
}



Sprite.draw()
{
	ctx.drawImage(
		this.img,
		this.x,
		this.y,
		this.width,
		this.height
		);
}
