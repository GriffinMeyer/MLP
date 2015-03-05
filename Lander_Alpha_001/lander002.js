 
 ///Initiating Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Debug Bool
var debug = true;

//Initializing Variables
//Level Demensions- Not the same as canvas
var roomX = 500;
var roomY = 700;
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
width: 50, height:50, sprite: "Phil (Default).png"};
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

//Meteor Array
var rocks = new Array();

//Image Variables
var playerImg = new Image();
playerImg.src = "Phil (Default).png";



//Update Function
function update(){
player.x += xvel;
player.y += yvel;
for(var i = 0; i < rocks.length; i++){
var obj = rocks[i];
if(AABB(obj.x,player.x,obj.y,player.y,obj.width,player.width,obj.height,player.height) == true){
	console.log("collision!");
}
}
}



function dirVelocity(dir, speed){
	if(dir == "left"){
		xvel -= speed;
	}
	if(dir == "right"){
		xvel += speed;
	}
	if(dir == "up"){
		yvel -= speed;
	}
	if(dir == "down"){
		yvel += speed;
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

function AABB(x1, x2, y1, y2, width1, width2, height1, height2){
	if(x1 < x2 + width2 &&
	   x1 + width1 > x2 &&
	   y1 < y2 + height2 &&
	   height1 + y1 > y2){
	   return true;
	}
	
}

function makeBoundary(){
	//top
	for(var i = 1; i < roomX/50; i++){
		rocks.push(new meteor(i*50,0, 50,50, "Meteor.png"));
	}
	//bottom
	for(var i = 1; i < roomX/50; i++){
		rocks.push(new meteor(i*50,roomY, 50,50, "Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++){
		rocks.push(new meteor(0,i*50,50,50,"Meteor.png"));
		
	}
	//right
	for(var i = 0; i < (roomY+50)/50; i++){
		rocks.push(new meteor(roomX,i*50,50,50,"Meteor.png"));
		
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

var rock = new meteor(10, 10, 10 ,10, "Meteor.png");
function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.drawImage(player.img, player.x, player.y,100,100);
//ctx.drawImage()
for(var i = 0; i < rocks.length; i++){
var obj = rocks[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}
//this draws a meteor
//ctx.drawImage(rock.img,10,10,100,100);}


//Launched on load
function loadGame(){
makeBoundary();
setInterval(function(){
controls();
update();
draw();
},5);
}