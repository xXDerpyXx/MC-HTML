


/*
===REMEMBER===

 > BE ORGANIZED

 > DONT SETTLE FOR HALF-BAKED CODE

 > FUNCTIONALIZE EVERYTHING

===REMEMBER==
*/

//SETUP VARIABLES / GLOBALS
//======================================================//
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext('2d');
//======================================================//

//COMMON FUNCTIONS
//======================================================//
function drawTile(imgName,x,y){ //JUST DRAWS, DOES NOT SET ANYTHING AND CAN BE FORCED TO DRAW NON-EXISTANT TILES
	img = document.getElementById(imgName);
	ctx.drawImage(img,x*32,y*32); //USES GRID COORDINATES, NOT TRUE COORDINATES
}

function setTile(x,y,grid,blockName){ // proper useage: grid = setTile(x,y,grid,name)
	grid.x.y.entityContent = {};
	grid.x.y.entityContent = blocks[blockName];
	return grid;
}
//======================================================//

//UNCOMMON FUNCTIONS
//======================================================//

function drawGrid(grid,width,height,xOffset,yOffset){ //OFFSETS DONT WORK, PLEASE FIX LATER
	for(var x=1;x<width;x++){
		for(var y=1;y<height;y++){
			drawTile(grid[x][y]["entityContent"]["name"]+".png",x,y);
		}
	}
}

//======================================================//


//INVENTORY DISPLAY STUFF (HALF BAKED VERSION)
//======================================================//
/*
function inventoryDisplay(slot){
	drawHalt = true;
	if(slot == null){
		for(var i = 0; i<20;i++){
			if(inventory[i] != null){
				displayItem(i+player.x,player.y,inventory[i]["name"],inventory[i]["amount"],player.selectedItem == i);
			}
		}
	}else{
		if(inventory[slot]["name"] != null){
			displayItem(player.x,player.y,inventory[slot]["name"],inventory[slot]["amount"],player.selectedItem == slot);
		}
	}
}
	
function displayItem(x,y,name,amount,selected){
	img = document.getElementById(name);
	ctx.fillStyle = "rgb(200,200,200)";
	ctx.font = "bold 14px Courier";
	ctx.fillRect((x*32)+6,((y*32)-32)+6,20,20);
	if(selected != false){
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillRect((x*32)+4,((y*32)-32)+4,24,24);
	}
	ctx.drawImage(img,(x*32)+8,((y*32)-32)+8,16,16);
	if(amount != null){
		ctx.fillStyle = "black";
		ctx.fillText(amount,(x*32)+20,(y*32-4));
	}
}
*/
//======================================================//