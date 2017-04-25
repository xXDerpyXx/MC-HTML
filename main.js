















	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext('2d');

	var randomness = 30;
	var size = 50;
	var smoothness = 35;

	var grid = {};

	function setGridBlock(x,y,block){
		grid[x][y]["content"] = block;
		grid[x][y]["data"] = blocks[block];
	}
	
	function resetGrid(){
		grid = {};
		for(i = 0;i<size;i++){
			grid[i] = {};
			for(j = 0;j<size;j++){
				grid[i][j] = {};
				grid[i][j]["height"] = 160;
				grid[i][j]["biome"] = Math.floor((Math.random() * 3)+1);
			}
		}
		
		
		
		
		for(var k = 0; k < smoothness; k++){
			for(var i = 0; i < size ; i ++) {
				for(var j = 0; j < size ; j ++) {
					//if((Math.floor((Math.random() * 100) + 1)) == 50){
					//	grid[i][j]["biome"] = 2;
					//}
					//if((Math.floor((Math.random() * 100) + 1)) == 50){
					//	grid[i][j]["biome"] = 1;
					//}
					if(grid[i+1] != undefined && grid[i-1] != undefined){
						if(grid[i][j+1] == undefined || grid[i][j-1] == undefined){
							//grid[i][j]["height"] = Math.floor(Math.floor((Math.random() * 128) + 1)+100);
							if(grid[j+1] == undefined){
								grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2))) + ((grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/3));
							}else{
								grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2))) + ((grid[i][j+1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/3));
							}
						}else{
							if(((grid[i][j+1]["height"]+grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/4) > 170){
								grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2)-1)) + ((grid[i][j+1]["height"]+grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/4));
								if(grid[j][i]["height"]>=230){
									grid[i+1][j]["height"] += 3;
									grid[i-1][j]["height"] += 3;
									grid[i][j+1]["height"] += 3;
									grid[i][j-1]["height"] += 3;
								}
								
								if((Math.floor((Math.random() * 100) + 1)) > 20)
									grid[i+1][j]["biome"] = grid[i][j]["biome"];
								if((Math.floor((Math.random() * 100) + 1)) > 20)
									grid[i-1][j]["biome"] = grid[i][j]["biome"];
								if((Math.floor((Math.random() * 100) + 1)) > 20)
									grid[i][j+1]["biome"] = grid[i][j]["biome"];
								if((Math.floor((Math.random() * 100) + 1)) > 20)
									grid[i][j-1]["biome"] = grid[i][j]["biome"];
								
								
								//grid[i][j]["biome"] = grid[i+(Math.floor((Math.random() * 2) + 1)-1)][j+(Math.floor((Math.random() * 2) + 1)-1)]["biome"]
							
							}else if(((grid[i][j+1]["height"]+grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/4) < 155){
								grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2)+1)) + ((grid[i][j+1]["height"]+grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/4));
							}else{
								grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2))) + ((grid[i][j+1]["height"]+grid[i][j-1]["height"]+grid[i+1][j]["height"]+grid[i-1][j]["height"])/4));
							}
							
						}
					}else{
						if(grid[i+1] == undefined){
							grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2))) + (grid[i-1][j]["height"]));
						}else{
							grid[i][j]["height"] = Math.floor((Math.floor((Math.random() * randomness) + 1)-((randomness/2))) + (grid[i+1][j]["height"]));
						}
					}
					
					if(grid[i][j]["height"] > 255){
						grid[i][j]["height"] = 255;
					}
						
					if(grid[i][j]["height"] < 60){
						grid[i][j]["content"] = "empty";
					}
					
				}
			}
		}
		
		for(i = 0;i<size;i++){
			for(j = 0;j<size;j++){
				if(grid[i][j]["height"]>180){
					setGridBlock(i,j,"stone");
					if(grid[i][j]["biome"]!=3){
						setGridBlock(i,j,"sandStone");
					}
				}
				if(grid[i][j]["height"]<190){
					if(grid[i][j]["biome"]==1){
						img = document.getElementById("grass");
						ctx.drawImage(img,i*32,j*32);
						grid[i][j]["content"] = "grass";
						grid[i][j]["solid"] = null;
					}
					if(grid[i][j]["biome"]==2){
						img = document.getElementById("truffulaGrass");
						ctx.drawImage(img,i*32,j*32);
						grid[i][j]["content"] = "truffulaGrass";
						grid[i][j]["solid"] = null;
					}
					if(grid[i][j]["biome"]==3){
						img = document.getElementById("sand");
						ctx.drawImage(img,i*32,j*32);
						grid[i][j]["content"] = "sand";
						grid[i][j]["solid"] = null;
					}
				}
				if(grid[i][j]["height"]==180){
					img = document.getElementById("cobble");
					ctx.drawImage(img,i*32,j*32);
					grid[i][j]["content"] = "cobble";
					grid[i][j]["health"] = 50;
					grid[i][j]["solid"] = true;
				}
				if(grid[i][j]["height"]<120){
					img = document.getElementById("sand");
					ctx.drawImage(img,i*32,j*32);
					grid[i][j]["content"] = "sand";
					grid[i][j]["health"] = 10;
					grid[i][j]["solid"] = null;
				}
				if(grid[i][j]["height"]<110 && grid[i][j]["biome"]!=3){
					img = document.getElementById("water");
					ctx.drawImage(img,i*32,j*32);
					grid[i][j]["content"] = "water";
					grid[i][j]["solid"] = null;
				}
			}
		}
		
		/*
		for(var i = 0; i < size ; i ++) {
			for(var j = 0; j < size ; j ++) {
				if(Math.round((Math.random() * 10)) == 5){
					makeTree(i,j);
				}
			}
		}
		*/
		drawGrid();
	}
	
	function drawGrid(){
		var offset = {};
		offset.x = player.x
		offset.y = player.y 
		
		for(i = offset.x-16;i<offset.x+16;i++){
			for(j = offset.y-16;j<offset.y+16;j++){
				try{
					ctx.fillStyle = "rgb(0,"+grid[i][j]["height"]+",0)";
					ctx.fillRect(i*32,j*32,32,32);
					img = document.getElementById(grid[i][j]["content"]);
					ctx.drawImage(img,i*32,j*32);
					if(grid[i][j]["entityContent"] != null){
						img = document.getElementById(grid[i][j]["entityContent"]);
						ctx.drawImage(img,i*32,j*32);
					}
					if(player.x == i && player.y == j){
						if(grid[i][j]["content"] == "water"){
							img = document.getElementById("playerInWater");
							ctx.drawImage(img,i*32,j*32);
						}else{
							img = document.getElementById("player");
							ctx.drawImage(img,i*32,j*32);
						}
					}
				}catch(err){
					console.log(i+","+j+": "+err);
					img = document.getElementById("default");
					ctx.drawImage(img,i*32,j*32);
				}
			}
		}
	}
	
	resetGrid();