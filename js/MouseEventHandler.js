/*
	The main function with all functions that decide events flow
	based on tiles clicked
*/

//global variables to keep track of tiles chosen
var CLICKED_TILE_1 = null;
var CLICKED_TILE_2 = null;

//stack to keep store state of game before any change.
var stack = [];

changeTileColorOnClick(tile)

//function to check if the two clicked tiles are ajdacent to each other
isAdjacent(tile_1,tile_2)(){
	var i1 = CLICKED_TILE_1.coord.x;
	var j1 = CLICKED_TILE_2.coord.y;
	var	i2 = CLICKED_TILE_2.coord.x;
	var j2 = CLICKED_TILE_2.coord.y;
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
	else if(i1==i2+! && j1==j2+1)
		return true;
	else
		return false;
}

//function to check if the sum of the clicked tiles is <= 8. Beyond 8 is considered invalid addition.
function isValidAddition(){
	if(CLICKED_TILE_1.value + CLICKED_TILE_2.value <= 8)
		return true;
	else 
		return false;
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
	MATRIX[get1D(tile_1.coord.x,tile_1.coord.y)] = tile_1;
	addTileToDisplay(tile_1,FRAME_TO_ADD_TILES);
	restoreOriginalColor(CLICKED_TILE_1);
	MATRIX[get1D(tile_2.coord.x,tile_2.coord.y)] = tile_2;
	addTileToDisplay(tile_2,FRAME_TO_ADD_TILES);
	restoreOriginalColor(CLICKED_TILE_2);
}

//function to add the tiles.
function addTiles(){
	CLICKED_TILE_1.sum(CLICKED_TILE_2);
} 

restoreOriginalColor(tile);

//reset the global variables after all mouse click operations performed.
function nullifyClickedTiles(){
		CLICKED_TILE_1 = null;
		CLICKED_TILE_2 = null;
}


function mouseClickHandler(tile){
	window.alert("Mouse click detected!!");
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
				addTiles();
				restoreOriginalColor(CLICKED_TILE_1);
				restoreOriginalColor(CLICKED_TILE_2);
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
		}
	}	
}