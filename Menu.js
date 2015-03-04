


function Menu()
{
	this.menuButtons = [];
	this.subMenu = [];
}





//-----------------Accesor Functions--------------------
Menu.prototype.getSubMenu = function(index, name)
{
	
	return this.subMenu[name];
}

Menu.prototype.getButton = function(index, name)
{
	
	return this.menuButton[name];
}


//---------------- Manipulation Funcitons-------------

Menu.prototype.addSubMenu = function(subMenu)
{
	this.subMenu.push(subMenu);
}


Menu.prototype.addButton = function(menuButton)
{
	this.menuButtons.push(menuButton);
}

Menu.prototype.removeSubMenu = function(index, name)
{
	
}



Menu.prototype.drawMenu = function()
{
	
}


Menu.prototype.drawMenuButton = function()
{
	while()
}
