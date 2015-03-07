var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Pluto = {img: null, x: 300, y: 0,
             width: 200, height: canvas.height, sprite: "Pluto.png"};
Pluto.img = new Image();
Pluto.img.src = Pluto.sprite;


var gravity = 0;


function crash(){
	var C1 = player.x + player.width;
	
    if(C1 > Pluto.x){
    	console.log("collision!");
    	health -= 100;
    }
}

function phase1(){
	
	//toss Charon at Phil
	var Charon = {img: null, x: 500, y: 300, rotation: 0,
             width: 200, height: 200, sprite: "Charon.png"};
    Charon.img = new Image();
    Charon.img.src = Charon.sprite;
    
    if(collision(Charon, player) == true){
	    console.log("collision!");
	    health -= 100;
    }
    
    setInterval(function(){
        Charon.x -= 5;
        Charon.rotation += (10 * Math.PI/180);
    }, 5);
}

function phase2(){
	
	//call ten meteors
	rock = new meteor(10, 10, 10 ,10, "Meteor.png");
	
	for(var i = 0; i < rocks.length; i++){
        var obj = rocks[i];
        ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}

function phase3(){
	
	//fire rockets at Phil
	
	setInterval(function(){
	    var Rocket = {img: null, x: 500, y: 350, rotation: 0,
	                  width: 300, height: 100, sprite: "Rocket.png"};
	    Rocket.img = new Image();
        Rocket.img.src = Rocket.sprite;
    
        if(collision(Rocket, player) == true){
	        console.log("collision!");
	        if (shield > 0) shield -= 40;
	        else if(shield <= 0) health -= 40;
        }
    
        var xRoc = player.x - Rocket.x;
        var yRoc = player.y - Rocket.y;
    
        var Rangle = Math.atan2(yRoc, xRoc);
    
        Rocket.rotation = Rangle;
    
        var xvelRoc = Math.cos(Rangle) * 5;
        var yvelRoc = Math.sin(Rangle) * 5;
    
        setInterval(function(){
            Rocket.x += xvelRoc;
            Rocket.y += yvelRoc;
        }, 5);
    }, 300);
}

function phase4(){
	
	//use the power of gravity
	
	var Charon = {img: null, x: -200, y: 300, rotation: 0,
             width: 200, height: 200, sprite: "Charon.png"};
    Charon.img = new Image();
    Charon.img.src = Charon.sprite;
	
	if(collision(Charon, player) == true){
	    console.log("collision!");
	    health -= 100;
    }
	
	while(gravity != 3){
		
		gravity += 0.05;
	}
	
	setTimeout(function(){
	    setInterval(function(){
	        Charon.x += 5;
            Charon.rotation -= (10 * Math.PI/180);
        }, 5);
	}, 5500);
}

setTimeout(phase1(), 1000);
clearTimeout(phase1());

setTimeout(phase2(), 2000);
clearTimeout(phase2());

setTimeout(phase3(), 8000);
clearTimeout(phase3());

setTimeout(phase4(), 14000);

