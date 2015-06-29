//Helper function to add a tile to display in the given frame.
function addTileToDisplay(Tile,frameName){
	var tileName = Tile.getTileName();
	var tileToBeAppended = "<img class='basic' id="+"'img_id"+tileName+"'"+" src="+IMAGE_TILES[Tile.value]+">"
	$(tileToBeAppended).appendTo("#"+frameName);
	$("#"+"img_id"+tileName).css({position: 'absolute', left: Tile.coord.leftCoord, top: Tile.coord.topCoord});
}

//adds all Tiles in MATRIX to display
function displayAllTiles(frameName){
	for(var i=0;i<MATRIX_SIZE;i++){
		for(var j=0;j<MATRIX_SIZE;j++){
			var tempTile = MATRIX[get1D(i,j)];
			addTileToDisplay(tempTile,frameName);
		}
	}
}