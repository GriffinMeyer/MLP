function Meteor(sprite)
{
	this.x = sprite.x;
	this.y = sprite.y;
	this.width = sprite.width;
	this.height = sprite.height;
	this.sprite = sprite;
	
	// set speed at which the meteor moves
	this.speed = 0;
	
	// acceleration for Meteor
	this.acc = 0.01;
	
	// set size of metoer
	this.size = 1;
	
	// set damage for Meteor default is 10
	this.damage = 0;

}

// inherit properties from Sprite
//Meteor.prototype = new Sprite();


// Physics of Meteor 

// return the damage reflected onto opposite object
Meteor.prototype.getDamage = function()
{
	return (this.damage * this.speed);
}



Meteor.prototype.reduceSpeed = function(objectHitSpeed)
{
	
}

Meteor.prototype.increaseSpeed = function()
{
	
}


// draws the meteor and overides the Sprite.draw() function
Meteor.prototype.draw = function()
{
	console.log("calling draw for Meteor");
	ctx.drawImage(this.sprite.img,this.x,this.y,this.width,this.height);
}


Meteor.prototype.checkCollision = function(object)
{
/*
    var crash = false;
    var mx1 = this.x;
    var Mx1 = this.x + this.width;
    var my1 = this.y;
    var My1 = this.y + this.height;
    var mx2 = object.x;
    var Mx2 = object.x + object.width;
    var my2 = object.y;
    var My2 = object.y + object.height;
	
	// 0 <= x < 1, 0 <= y < 1
    if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 5;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 5;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 5;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 5;
          crash = true;
       }  
    
    //0 <= x < 1, 1 <= y < 2    
    }else if(0 <= Math.abs(xvel) < 1 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
       } 
    
    //1 <= x < 2, 0 <= y < 1   
    }else if(1 <= Math.abs(xvel) < 2 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
       }
    
    //1 <= x < 2, 1 <= y < 2
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 10;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 10;
          crash = true;
       }
    //0 <= x < 1, 2 <= y < 3
    }else if(0 <= Math.abs(xvel) < 1 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
       }
    
    //1 <= x < 2, 2 <= y 3
    }else if(1 <= Math.abs(xvel) < 2 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
       }
    
    //2 <= x < 3, 2 <= y < 3
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
       }
    
    //2 <= x < 3, 1 <= y < 2
    }else if(2 <= Math.abs(xvel) < 3 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
       }
    
    //2 <= x < 3, 0 <= y < 1
    }else if(2 <= Math.abs(xvel) < 3 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 15;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 15;
          crash = true;
       }
    
    // x = 3 or y = 3
    }else if(Math.abs(xvel) == 3 || Math.abs(yvel) == 3){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 20;
          crash = true;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 20;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          this.damage = 20;
          crash = true;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          this.damage = 20;
          crash = true;
       }
    }	
*/
}
