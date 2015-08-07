/*
	This file adds the mouse listener events to the tiles
	
*/

function addMouseListenerToTile(Tile){
	var tileName = Tile.getTileName();
	var tileId = "img_id"+tileName;
	var tileElement = document.getElementById(tileId);
	if(tileElement.addEventListener){ 
		tileElement.addEventListener('click', function() { mouseClickHandler(Tile); });
	}
	else{
		tileElement.attachEvent('onclick', function() { mouseClickHandler(Tile); });
	}
}

function listenerAllTiles(){
	for(var i=0;i<MATRIX_SIZE;i++){
		for(var j=0;j<MATRIX_SIZE;j++){
			var tempTile = MATRIX[get1D(i,j)];
			addMouseListenerToTile(tempTile);
		}
	}
}

function undoListener(){
	var undoBtnElement = document.getElementById("undoBtn");
	if(undoBtnElement.addEventListener){
		undoBtnElement.addEventListener('click',function() { undo(); });
	}
	else{
		undoBtnElement.attachEvent('onclick',function() { undo(); });
	}
}