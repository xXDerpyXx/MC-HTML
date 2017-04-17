canvas = document.getElementById("mainCanvas");
ctx = canvas.getContext("2d");
ctx.fillRect(1,1,50,50);
for(var i = 0;i<100;i++){
	for(var j = 0;j<100;j++){
		ctx.fillStyle = "rgb("+i+",127,"+j+")";
		ctx.fillRect(i,j,50,50);
	}
}