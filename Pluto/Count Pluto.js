var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Pluto = new Image();
Pluto.src = "Pluto.png";

var Charon = new Image();
Charon.src = "Pluto.png";

var gravity = 0;


function collide(){
	
	var Px1 = Pluto.x + Pluto.width;
	var Py1 = Pluto.y + Pluto.height;
	var Px2 = Phil.x + Phil.width;
	var Py2 = Phil.y + Phil.height;
	
	if(Pluto.x >= Phil.x && Pluto.x <= Px2 && Pluto.y >= Phil.y && Pluto.y <= Py2){
          health -= 100;
        
        
    }else if(Pluto.x >= Phil.x && Pluto.x <= Px2 && Py1 >= Phil.y && Py1 <= Py2){
          health -= 100;
          
          
    }else if(Px1 >= Phil.x && Px1 <= Px2 && Pluto.y >= Phil.y && Pluto.y <= Py2){
          health -= 100;
          
          
    }else if(Px1 >= Phil.x && Px1 <= Px2 && Py1 >= Phil.y && Py1 <= Py2){
          health -= 100;
          
    }
	
}

function phase1(){
	
	//toss Charon at Phil
}

function phase2(){
	
	//call ten meteors
}

function phase3(){
	
	//fire rockets at Phil
}

function phase4(){
	
	//use the power of gravity
	
	while(gravity != 4){
		
		gravity += 0.1;
	}
}
