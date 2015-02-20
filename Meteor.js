use2D = true;
initGame("canvas");

var meteor = new Sprite();
meteor.width = 25;
meteor.height = 25;
meteor.x = 600;
meteor.y = Math.round(Math.random() * 575);
meteor.image = 
Texture.load("");




meteor.update = function(d){
	
	var Xdis = Phil.x - this.x;
	var Ydis = Phil.y - this.y;
	
	var sqx = Math.pow(Xdis, 2);
	var sqy = Math.pow(Ydis, 2);
	
	var sqh = sqx + sqy;
	
	var Hdis = Math.sqrt(sqh);
	
	var speed = 50/Hdis;
	
	var angle = Math.atan2(Ydis, Xdis);
	
	this.rotation = angle;
	
	var Xspeed = Math.cos(angle) * speed;
	var YSpeed = Math.sin(angle) * speed;
}
