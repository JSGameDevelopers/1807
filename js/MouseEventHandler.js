/*
	The main function with all functions that decide events flow
	based on tiles clicked
*/

//global variables to keep track of tiles chosen
var CLICKED_TILE_1 = null;
var CLICKED_TILE_2 = null;

//stack to keep store state of game before any change.
var stack = [];

function changeTileColor(tile,colorCode){
	var tileName = tile.getTileName();
	var divId = "div_id"+tileName;
	var divElement = document.getElementById(divId);
	if(colorCode !=0){
		divElement.style.backgroundColor = COLOR_TILES[colorCode];
	}
	else{
		if(tile.value == 1 || tile.value == 8 || tile. value ==0 || tile.value ==7)
			divElement.style.backgroundColor = COLOR_TILES[0];
		else
			divElement.style.backgroundColor = COLOR_TILES[1];
	}
}

//function to check if the two clicked tiles are ajdacent to each other
function isAdjacent(tile_1,tile_2){
	var i1 = tile_1.coord.x;
	var j1 = tile_1.coord.y;
	var	i2 = tile_2.coord.x;
	var j2 = tile_2.coord.y;
	if(i1==i2 && j1==j2+1)
		return true;
	else if(i1==i2 && j1==j2-1)
		return true;
	else if(j1==j2 && i1==i2+1)
		return true;
	else if(j1==j2 && i1==i2-1)
		return true;
	else if(i1==i2-1 && j1==j2-1)
		return true;
	else if(i1==i2-1 && j1==j2+1)
		return true;
	else if(i1==i2+1 && j1==j2-1)
		return true;
	else if(i1==i2+1 && j1==j2+1)
		return true;
	else
		return false;
}


//function to check if the sum of the clicked tiles is <= MAX_NUM_ALLOWED(8). Beyond that is considered invalid addition.
function isValidAddition(){
	if(CLICKED_TILE_1.value + CLICKED_TILE_2.value <= MAX_NUM_ALLOWED)
		return true;
	else 
		return false;
}

function replaceTileToDisplay(tile){
	var tileName = tile.getTileName();
	var tileId = "img_id"+tileName;
	var tileElement = document.getElementById(tileId);
	//tileElement.src = "images/0.png"
	tileElement.src = IMAGE_TILES[tile.value];
	//tileElement.src = tile.image_location;
}

function replaceTile(tile){
	MATRIX[get1D(tile.coord.x,tile.coord.y)] = tile;
	replaceTileToDisplay(tile);
	changeTileColor(tile,COLOR_VALID_ADDITION);
}
//function to add the tiles.
function addTiles(){
	var tile_1 = CLICKED_TILE_1;
	var tile_2 = CLICKED_TILE_2;
	tile_1.sum(tile_2);
	replaceTile(tile_1);
	replaceTile(tile_2);
} 

//reset the global variables after all mouse click operations performed.
function nullifyClickedTiles(){
	CLICKED_TILE_1 = null;
	CLICKED_TILE_2 = null;
}

//function to push the two tiles to be changed on stack.
function storeState(){
	var tile_1 = CLICKED_TILE_1;
	var tile_2 = CLICKED_TILE_2;
	var pair_tile = new pairTiles(tile_1,tile_2);
	stack.push(pair_tile);
	//window.alert("STORE_STATE Tile1 == "+pair_tile.tile_1.value.toString()+" Tile2 ==  "+pair_tile.tile_2.value.toString());
	//window.alert("Coord = "+pair_tile.tile_1.coord.x+" , "+pair_tile.tile_1.coord.y);
}

function undo(){
	//window.alert("UNDO!");
	var pair_tile = stack.pop();
	var tile_1 = pair_tile.tile_1;
	var tile_2 = pair_tile.tile_2;
	//window.alert("Tile1 ==  "+tile_1.value.toString()+" Tile2 ==  "+tile_2.value.toString());
	replaceTile(tile_1);
	replaceTile(tile_2);
	nullifyClickedTiles();
}

function mouseClickHandler(tile){
	//window.alert("Mouse click detected!!");
	console.log("Mouse clicked!");
	event = window.e || event;
	console.log(event.toString());
	console.log(tile.coord.leftCoord.toString()+" , "+tile.coord.topCoord.toString());
	if(CLICKED_TILE_1 == null && CLICKED_TILE_2 == null){
		CLICKED_TILE_1 = tile;
		changeTileColor(tile,COLOR_CLICK);
	}
	else if(CLICKED_TILE_1 != null && CLICKED_TILE_2 == null){
		if(isAdjacent(CLICKED_TILE_1,tile)){
			CLICKED_TILE_2 = tile;
			changeTileColor(tile,COLOR_CLICK);
			if(isValidAddition()){
				storeState();
				addTiles();
				changeTileColor(CLICKED_TILE_1,COLOR_RESTORE);
				changeTileColor(CLICKED_TILE_2,COLOR_RESTORE);
				nullifyClickedTiles();
			}
			else{
				changeTileColor(CLICKED_TILE_1,COLOR_INVALID_ADDITION);
				changeTileColor(CLICKED_TILE_2,COLOR_INVALID_ADDITION);
				changeTileColor(CLICKED_TILE_1,COLOR_RESTORE);
				changeTileColor(CLICKED_TILE_2,COLOR_RESTORE);
				nullifyClickedTiles();
			}
		}
		else{
			changeTileColor(CLICKED_TILE_1,COLOR_RESTORE);
			CLICKED_TILE_1 = tile;
			changeTileColor(CLICKED_TILE_1,COLOR_CLICK);
		}
	}
	return ;
}
