canvas = document.getElementById("mainCanvas");
ctx = canvas.getContext("2d");

/*
function randomFill(){
	for(var i = 0;i<255;i++){
		for(var j = 0;j<255;j++){
			ctx.fillStyle = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
			ctx.fillRect(i*5,j*5,5,5);
		}
	}
}*/

//timer = setInterval(randomFill,100);

george = {};
george.x = 50;
george.y = 50;

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
			entity.y--;
	}else if(temp==2){
		if(entity.y<49)
			entity.y++;
	}else if(temp==3){
		if(entity.x>0)
			entity.x--;
	}else{
		if(entity.x<49)
			entity.x++;
	}
	draw(entity.x,entity.y);
}

ants = {};
for(var i = 0; i<100;i++){
	ants[i] = {};
	ants[i].x = 25;
	ants[i].y = 25;
}

function clockCycle(){
	cleanBoard();
	for(var i = 0; i<100;i++){
		move(ants[i]);
	}
}

timer = setInterval(clockCycle,100);