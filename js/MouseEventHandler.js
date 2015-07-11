/*
	The main function with all functions that decide events flow
	based on tiles clicked
*/

//global variables to keep track of tiles chosen
var CLICKED_TILE_1 = null;
var CLICKED_TILE_2 = null;

//stack to keep store state of game before any change.
var stack = [];

function changeTileColorOnClick(tile){
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
	restoreOriginalColor(tile);
}
//function to add the tiles.
function addTiles(){
	CLICKED_TILE_1.sum(CLICKED_TILE_2);
	replaceTile(CLICKED_TILE_1);
	replaceTile(CLICKED_TILE_2);
} 

function restoreOriginalColor(tile){
}

function flagInvalidAdditionColor(){
}

//reset the global variables after all mouse click operations performed.
function nullifyClickedTiles(){
	CLICKED_TILE_1 = null;
	CLICKED_TILE_2 = null;
}

//function to push the two tiles to be changed on stack.
function storeState(){
	var pair_tile = pairTiles(CLICKED_TILE_1,CLICKED_TILE_2);
	stack.push(pair_tile);
}

function undo(){
	var pair_tile = stack.pop();
	var tile_1 = pair_tile.tile_1;
	var tile_2 = pair_tile.tile_2;
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
		changeTileColorOnClick(CLICKED_TILE_1);
	}
	else if(CLICKED_TILE_1 != null && CLICKED_TILE_2 == null){
		if(isAdjacent(CLICKED_TILE_1,tile)){
			CLICKED_TILE_2 = tile;
			changeTileColorOnClick(CLICKED_TILE_2);
			if(isValidAddition()){
				storeState();
				addTiles();
				nullifyClickedTiles();
			}
			else{
				flagInvalidAdditionColor();
				restoreOriginalColor(CLICKED_TILE_1);
				restoreOriginalColor(CLICKED_TILE_2);
				nullifyClickedTiles();
			}
		}
		else{
			CLICKED_TILE_1 = tile;
			changeTileColorOnClick(CLICKED_TILE_1);
			CLICKED_TILE_2 = null;
		}
	}
	return ;
}