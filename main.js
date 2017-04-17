canvas = document.getElementById("mainCanvas");
ctx = canvas.getContext("2d");
ctx.fillRect(1,1,50,50);
for(var i = 0;i<255;i++){
	for(var j = 0;j<255;j++){
		ctx.fillStyle = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
		ctx.fillRect(i*5,j*5,5,5);
	}
}