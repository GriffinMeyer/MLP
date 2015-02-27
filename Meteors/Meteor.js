var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var meteor = new Image();
meteor.src = "Meteor.png";
var mx = 999;
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

function collision(image1, image2){
	
	var mx1 = image1.x;
	var Mx1 = image1.x + image1.width;
	var my1 = image1.y;
	var My1 = image1.y + image.height;
	var mx2 = image2.x;
	var Mx2 = image2.x + image2.width;
	var my2 = image2.y;
	var My2 = image2.y + image2.width;
	
	if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
	   if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 20;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 20;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 20;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 20;
          
       }  
        
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 40;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 40;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 40;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 40;
          
       } 
       
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 60;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 60;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 60;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 60;
          
       }
        
    }else if(3 <= Math.abs(xvel) < 4 && 3 <= Math.abs(yvel) < 4){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 80;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 80;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 80;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 80;
          
       }
        
    }else if(Math.abs(xvel) == 4 && Math.abs(yvel) == 4){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 100;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 100;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          health -= 100;
          
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          health -= 100;
          
       }
        
    }

}

function moveandhit(){
	

}

collision(img, meteor);
