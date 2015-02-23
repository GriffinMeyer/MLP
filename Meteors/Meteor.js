var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var meteor = new Image();
meteor.src = "Meteor.png"
var mx = 1000;
var my = Math.round(Math.random() * 800);

function movement(){

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

function collision(){
	
	//if phil collides with meteor at speed 0, 1 damage
	//if phil collides with meteor at speed 1, 2 damage
	//if phil collides with meteor at speed 2, 3 damage 
	//if phil collides with meteor at speed 3, 4 damage
	//if phil collides with meteor at full speed, death
}

function moveandhit(){
	

}
