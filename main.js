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

function draw(x,y){
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(x*5,y*5,5,5);
}

function move(){
	console.log(george.x+","+george.y);
	var temp = Math.round(Math.random()*4);
	if(temp == 1){
		george.y--;
	}else if(temp==2){
		george.y++;
	}else if(temp==3){
		george.x--;
	}else{
		george.x++;
	}
	draw(george.x,george.y);
}

timer = setInterval(move,100);