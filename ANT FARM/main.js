canvas = document.getElementById("mainCanvas");
ctx = canvas.getContext("2d");


function randomFill(){
	for(var i = 0;i<255;i++){
		for(var j = 0;j<255;j++){
			ctx.fillStyle = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
			ctx.fillRect(i*5,j*5,5,5);
		}
	}
}
function staticFill(){
	for(var i = 0;i<255;i++){
		for(var j = 0;j<255;j++){
			var x = Math.round(Math.random()*3)*127;
			ctx.fillStyle = "rgb("+x+","+x+","+x+")";
			ctx.fillRect(i*5,j*5,5,5);
		}
	}
}

//timer = setInterval(randomFill,10);

george = {};
george.x = 50;
george.y = 50;

function gridMake(width,height){
	var temp = {};
	for(var i = 0; i<width;i++){
		temp[i] = {};
		for(var j = 0; j<height;j++){
			temp[i][j] = {};
			temp[i][j]["content"] = 0;
		}
	}
	return temp;
}

var grid = gridMake(50,50);
var dispGrid = grid;

function cleanBoard(){
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0,0,500,500);
}

function draw(x,y){
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(x*10,y*10,10,10);
}

function move(entity){
	var temp = Math.round(Math.random()*4);
	if(temp == 1){
		if(entity.y>0)
			if(grid[entity.x][entity.y-1]["content"] == 0)
			entity.y--;
	}else if(temp==2){
		if(entity.y<49)
			if(grid[entity.x][entity.y+1]["content"] == 0)
				entity.y++;
	}else if(temp==3){
		if(entity.x>0)
			if(grid[entity.x-1][entity.y]["content"] == 0)
				entity.x--;
	}else{
		if(entity.x<49)
			if(grid[entity.x+1][entity.y]["content"] == 0)
				entity.x++;
	}
	//if(entity.y<49)
			//if(grid[entity.x][entity.y+1]["content"] == 0)
				//entity.y++;
	draw(entity.x,entity.y);
	dispGrid[entity.x][entity.y]["content"] = 1;
}

ants = {};
for(var i = 0; i<100;i++){
	ants[i] = {};
	ants[i].x = 25;
	ants[i].y = 25;
}

function clockCycle(){
	dispGrid = gridMake(50,50);
	cleanBoard();
	for(var i = 0; i<100;i++){
		move(ants[i]);
	}
	grid = dispGrid;
}

timer = setInterval(clockCycle,100);
