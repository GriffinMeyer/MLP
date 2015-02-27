var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var key = [];
var opened = false;

var img = new Image();
img.src = "phill.png";
var x = 0;
var y = 0;

var rock = new Image();
rock.src = "Meteor.png";

var energy = 100;

(function(){
document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
};
document.onkeyup=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=0;
    //checking for relase of Z
    if(code == 90){
    opened = !opened;
    }
};
})();

var xvel = 0;
var yvel = 0;
var velmax = 4;

var health = 100;
var shield = 100;



function controls(){
	//left
	if(key[37]){
		if(xvel > -velmax && energy > 0){
			xvel -= .01;
			energy -= .1;
		}
    }
    //up
    if(key[38]){
    	if(yvel > -velmax && energy > 0){
    	yvel -= .01;
    	energy -= .1;
    	}
    }
    //right
    if(key[39]){
    	if(xvel < velmax && energy > 0){
    	xvel += .01;
    	energy -= .1;
    	}
    }
    //down
    if(key[40]){
    	if(xvel < velmax && energy > 0){
    	yvel += .01;
    	energy -= .1;
    	}
    }
   
}

function checkCollide(){
	//double check this.
	if(x < 0 + 281 && x + 480 && y < 0 + 286 && 240 + y > 0){
		return true;
	}
}

function movement(){
	x+=xvel;
	y+=yvel;
}




function update(){
	movement();
	if(checkCollide() == true){
		//alert("collide");
	}
	if(health <= 0){
		alert("death");
		health = 100;
	}
	if(opened){
   		img.src = "Phil (Open).png";
   		if(energy <= 100){
   			energy += .05;
   		}
   		if(energy >= 100 && shield <= 100){
   			shield += .01;
   		}
   	}
   	if(!opened){
   		img.src = "phill.png";
   		if(energy > 0){
   			if(shield > 0){
   			shield -=.01;
   			}
   			if(shield <= 0){
   				health -=.01;
   				}
   			
   		}
   	}
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.translate(-xvel,-yvel);
ctx.drawImage(space,-8544/2,-5696/2,8544,5696);

ctx.drawImage(img, x+canvas.width/2-240, y+canvas.height/2-120, 480, 240);
ctx.drawImage(rock, 0, 0, 281, 286);

//draw energy bar
ctx.fillStyle = "red";
ctx.fillRect(x+(canvas.width/2)-(energy*6)/2,y+canvas.height-10,energy*6,10);
//Draw health bar
ctx.fillStyle = "green";
ctx.fillRect(x+(canvas.width/2)-(health*6)/2,y+canvas.height-40,health*6,30);
//draw shield bar
ctx.fillStyle = "blue";
ctx.fillRect(x+(canvas.width/2)-(shield*6)/2,y+canvas.height-40,shield*6,30);
}


var space = new Image();
space.src = "space.jpg";


setInterval(function(){
draw();
controls();
update();
},5);