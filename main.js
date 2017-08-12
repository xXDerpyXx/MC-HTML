


/*
===REMEMBER===

 > BE ORGANIZED

 > DONT SETTLE FOR HALF-BAKED CODE

 > FUNCTIONALIZE EVERYTHING

 > USE MORE COMMENTS

 > https://en.wikipedia.org/wiki/Best_coding_practices

===REMEMBER==
*/


//SETUP VARIABLES / GLOBALS
//======================================================//
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext('2d');
//======================================================//

//COMMON FUNCTIONS
//======================================================//

//Tile Functions
//=========
function drawTile(imgName,x,y){ //JUST DRAWS, DOES NOT SET ANYTHING AND CAN BE FORCED TO DRAW NON-EXISTANT TILES
	img = document.getElementById(imgName);
	ctx.drawImage(img,x*32,y*32); //USES GRID COORDINATES, NOT TRUE COORDINATES
}

function drawHeight(height,x,y){ //JUST DRAWS, DOES NOT SET ANYTHING AND CAN BE FORCED TO DRAW NON-EXISTANT TILES
	ctx.fillStyle="rgb("+0+","+height+","+0+")";
	ctx.fillRect(x*32,y*32,32,32); //USES GRID COORDINATES, NOT TRUE COORDINATES
}

function setTile(x,y,grid,blockName){ // proper useage: grid = setTile(x,y,grid,name)
	grid.x.y.entityContent = {};
	grid.x.y.entityContent = blocks[blockName];
	return grid;
}
//=========

//======================================================//

//UNCOMMON FUNCTIONS
//======================================================//

//Grid Drawing Functions
//=========
function drawGrid(grid,width,height,xOffset,yOffset){ //OFFSETS DONT WORK, PLEASE FIX LATER
	for(var x=1;x<width;x++){
		for(var y=1;y<height;y++){
			drawTile(grid[x][y]["entityContent"]["name"]+".png",x,y);
		}
	}
}

function drawGridHeight(grid,width,height,xOffset,yOffset){
	for(var x=1;x<width;x++){
		for(var y=1;y<height;y++){
			drawHeight(grid[x][y]["entityContent"]["height"],x,y);
		}
	}
}
//=========

//Grid Setup Functions
//========
function setupGrid(width,height){
	var grid = {};
	for(var x = 0; x < width; x++){
		grid[x] = {};
		for(var y = 0; y < height; y++){
			grid[x][y]={};
			grid[x][y]["entityContent"] = {};
			grid[x][y]["entityContent"]["height"] = 0;
		}
	}
	return grid;
}
//========

//Map Generation Functions
//=========
function mapGenA(grid,width,height,rand,smoothness){
	for(var x = 0; x < width; x++){
		for(var y = 0; y < height; y++){
			grid[x][y]["entityContent"]["height"] = Math.round(Math.random()*rand);
			//console.log(grid[x][y]["entityContent"]["height"]);
		}
	}
	
	for(var i = 0; i<smoothness;i++){
		grid = smoothGrid(grid,width,height);
	}
	
	return grid;
}

function smoothGrid(grid,width,height){
	for(var x = 0; x < width; x++){
		for(var y = 0; y < height; y++){
			var total = 1;
			var avg = grid[x][y]["entityContent"]["height"];
			try{
				avg+=grid[x+1][y]["entityContent"]["height"];
				total+=1;
			}catch(err){
				
			}
			try{
				avg+=grid[x-1][y]["entityContent"]["height"];
				total+=1;
			}catch(err){
				
			}
			try{
				avg+=grid[x][y+1]["entityContent"]["height"];
				total+=1;
			}catch(err){
				
			}
			
			try{
				avg+=grid[x][y-1]["entityContent"]["height"];
				total+=1;
			}catch(err){
				
			}
			
			grid[x][y]["entityContent"]["height"] = Math.round(avg/total);
			
		}
	}
	return grid;
}
//=========

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

var mainWidth = 30;
var mainHeight = 30;
var mainGrid = mapGenA(setupGrid(mainWidth,mainHeight),mainWidth,mainHeight,255,0);
drawGridHeight(mainGrid,mainWidth,mainHeight,0,0);

function resmooth(){
	mainGrid = smoothGrid(mainGrid,mainWidth,mainHeight);
	drawGridHeight(mainGrid,mainWidth,mainHeight,0,0);
}

var timer = setInterval(resmooth,1000);

