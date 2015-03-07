 
 ///Initiating Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Debug Bool
var debug = true;

//Initializing Variables
//Player Stats
var health = 100;
var energy = 100;
var shield = 100;
//Level Demensions- Not the same as canvas
var roomX = 1150;
var roomY = 750;
//Velocity direction values
var xvel = 0;
var yvel = 0;
//Acceleration
var globalVel = .01;
//Maximum speed the lander can travel;
var maxVel = 3;

//For keypress Detection and storage
var key = [];

//Bool for mode
var opened = false;


//Player Object
var player = {img:null, x: canvas.width/2, y: canvas.height/2, 
width: 100, height:100, sprite: "Phil (Default).png"};
player.img = new Image();
player.img.src = player.sprite;

//Meteor object
function meteor(x,y, width, height, sprite){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.sprite = sprite;
this.img = new Image();
this.img.src = sprite;
}

//Level Box Array
var boundary = new Array();
//Obstacle array
var meteors = new Array();


//Image Variables
var playerImg = new Image();
playerImg.src = "Phil (Default).png";

function initMeteors(){
		meteors.push(new meteor(10,10, 100,100, "Meteor.png"));
		meteors.push(new meteor(10,100,100,100, "Meteor.png"));
	}

function statBars(){
	//red to draw health
	ctx.fillStyle = "red";
	ctx.fillRect((canvas.width/2)-(energy*6)/2,canvas.height-10,energy*6, 10);
	ctx.fillStyle = "blue";
	ctx.fillRect((canvas.width/2)-(shield*6)/2,canvas.height-20,shield*6, 10);
	ctx.fillStyle = "green";
	ctx.fillRect((canvas.width/2)-(health*6)/2,canvas.height-30,health*6, 10);
	//back to black
	ctx.fillStyle = "black";
	
}

function collision(image1, image2){
	
    var mx1 = image1.x;
    var Mx1 = image1.x + image1.width;
    var my1 = image1.y;
    var My1 = image1.y + image.height;
    var mx2 = image2.x;
    var Mx2 = image2.x + image2.width;
    var my2 = image2.y;
    var My2 = image2.y + image2.width;
	
	// 0 <= x < 1, 0 <= y < 1
    if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
       }  
    
    //0 <= x < 1, 1 <= y < 2    
    }else if(0 <= Math.abs(xvel) < 1 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       } 
    
    //1 <= x < 2, 0 <= y < 1   
    }else if(1 <= Math.abs(xvel) < 2 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       }
    
    //1 <= x < 2, 1 <= y < 2
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
       }
    //0 <= x < 1, 2 <= y < 3
    }else if(0 <= Math.abs(xvel) < 1 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //1 <= x < 2, 2 <= y 3
    }else if(1 <= Math.abs(xvel) < 2 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 2 <= y < 3
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 1 <= y < 2
    }else if(2 <= Math.abs(xvel) < 3 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    //2 <= x < 3, 0 <= y < 1
    }else if(2 <= Math.abs(xvel) < 3 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
       }
    
    // x = 3 or y = 3
    }else if(Math.abs(xvel) == 3 || Math.abs(yvel) == 3){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
       }
    }
}

var Xdis;
var Ydis;
var sqx;
var sqy;
var sqh;
var Hdis;
var speed;
var angle;
var Xspeed;
var Yspeed;
//Update Function
function update(){
	
	//Updating the array that surrounds the level
		for(var i = 0; i < boundary.length; i++){
			var obj = boundary[i];
			obj.x -= xvel;
			obj.y -= yvel;
		}
	//updating the array for obstacle meteors
	for(var i = 0; i < meteors.length; i++){
		
			obj = meteors[i];
			Xdis = player.x - obj.x;
			Ydis = player.y - obj.y;
			sqx = Math.pow(Xdis, 2);
			sqy = Math.pow(Ydis, 2);
			sqh = sqx + sqy;
			Hdis = Math.sqrt(sqh);
			speed = 3/Hdis;
		    angle = Math.atan2(Ydis, Xdis);
			obj.rotation = angle;
			Xspeed = Math.cos(angle) * speed;
			YSpeed = Math.sin(angle) * speed;
			obj.x += Xspeed;
			obj.y += Yspeed;
			//obj.x++;

		}
		
}



function dirVelocity(dir, speed){
	if(dir == "left"){
		if(xvel > -maxVel){
		xvel -= speed;	
		}
		
	}
	if(dir == "right"){
		if(xvel < maxVel){
			xvel += speed;
		}
		
	}
	if(dir == "up"){
		if(yvel > -maxVel){
		yvel -= speed;	
		}
		
	}
	if(dir == "down"){
		if(yvel < maxVel){
			yvel += speed;
		}
		
	}
}

function modeSwitch(){
	opened = !opened;
	if(opened){
		player.img.src = "Phil (Open).png";
	}
	if(!opened){
		player.img.src = "Phil (Default).png";
	}
	if(debug){
		console.log("Opened set to " + opened);
	}
	
}

function makeBoundary(){
	//top
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,0, 50,50, "Meteor.png"));
	}
	//bottom
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,roomY, 50,50, "Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++){
		boundary.push(new meteor(0,i*50,50,50,"Meteor.png"));
		
	}
	//right
	for(var i = 0; i < (roomY+50)/50; i++){
		boundary.push(new meteor(roomX,i*50,50,50,"Meteor.png"));
		
	}
	
}
//Control setting
function controls(){
	//If you only want the function to happen once per keypress
	//Put it within the document.onkeydown functions
	//else, if you want something like continues movement
	//while a key is pressed, put it outside the functions.
	//check keyup
document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
};

//Key down Checking Function
document.onkeyup=function(e){
	code=window.event?e.keyCode:e.which;
	key[code] = 0;
	//Mode Switch
	if(code == 90){
		modeSwitch();
	}
	
};
//For movement
	//left
	if(key[37]){
		dirVelocity("left", globalVel);
	}
	//right
	if(key[39]){
		dirVelocity("right", globalVel);
	}
	//up
	if(key[38]){
		dirVelocity("up", globalVel);
	}
	//down
	if(key[40]){
		dirVelocity("down", globalVel);
	}
	
	if(key[90]){
		
	}
}

function draw(){
	//The order things are listed here is the order they're drawn,
	//first to last. We should probably put all images to be drawn
	//into an array for better management, and layer control
//Clear Rect is a better way of doing width=width, clears the screen
//for drawing fresh.
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.drawImage(player.img, player.x, player.y,player.width,player.height);
//ctx.drawImage()
for(var i = 0; i < boundary.length; i++){
var obj = boundary[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}

for(var i = 0; i < meteors.length; i++){
var obj = meteors[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}
ctx.drawImage(meteors[0].img,meteors[0].x,meteors[0].y,meteors[0].width,meteors[0].height);
//ctx.drawImage(meteors[0].img,10,10,100,100);
statBars();

//this draws a meteor
//ctx.drawImage(rock.img,10,10,100,100);}


//Launched on load
function loadGame(){
makeBoundary();
initMeteors();
setInterval(function(){
controls();
update();
draw();
},5);
}