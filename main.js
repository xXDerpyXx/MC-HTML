


//SETUP VARIABLES / GLOBALS
//======================================================//
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext('2d');
//======================================================//

//COMMON FUNCTIONS
//======================================================//
function drawTile(imgName,x,y){
	img = document.getElementById(imgName);
	ctx.drawImage(img,x*32,y*32); //USES GRID COORDINATES, NOT TRUE COORDINATES
}

function setTile(x,y,grid,blockName){ // proper useage: grid = setTile(x,y,grid,name)
	grid.x.y.entityContent = {};
	grid.x.y.entityContent = blocks[blockName];
	return grid;
}
//======================================================//

/* COPIED FROM ORIGINAL (DELETE LATER)
img = document.getElementById(grid[i][j]["entityContent"]);
						ctx.drawImage(img,i*32,j*32);
*/

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
