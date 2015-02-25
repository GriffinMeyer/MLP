var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var key = [];
var opened = false;

var img = new Image();
img.src = "phill.png";
var x = 0;
var y = 0;

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

function update(){
	x+=xvel;
	y+=yvel;
	if(opened){
   		img.src = "lander.jpg";
   		if(energy < 100){
   			energy += .05;
   		}
   		if(energy >= 100){
   			shield += .01;
   		}
   	}
   	if(!opened){
   		img.src = "phill.png";
   		if(energy > 0){
   			if(shield > 0){
   			shield -=.1;
   			}
   			if(shield < 0){
   				health -=.01;
   			}
   			
   		}
   	}
   	
   	
	
}


var space = new Image();
space.src = "space.jpg";


setInterval(function(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.translate(-xvel,-yvel);
ctx.drawImage(space,-8544/2,-5696/2,8544,5696);
controls();


//ctx.translate(0+=xvel,0+=yvel);

update();
ctx.drawImage(img, x+canvas.width/2-100, y+canvas.height/2-100, 200, 200);

//draw energy bar
ctx.fillStyle = "red";
ctx.fillRect(x+(canvas.width/2)-(energy*6)/2,y+canvas.height-10,energy*6,10);
//Draw health bar
ctx.fillStyle = "green";
ctx.fillRect(x+(canvas.width/2)-(health*6)/2,y+canvas.height-0,health*6,30);
//draw shield bar
ctx.fillStyle = "blue";
ctx.fillRect(x+(canvas.width/2)-(shield*6)/2,y+canvas.height-40,shield*6,30);
},5);