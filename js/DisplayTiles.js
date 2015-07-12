//Helper function to add a tile to display in the given frame.
function addTileToDisplay(Tile,frameName){
	var tileName = Tile.getTileName();
	var tileToBeAppended = "<div class=divTileClass id="+"'div_id"+tileName+"'"+">"+
	"<button class='buttonTileClass' id="+"'button_id"+tileName+"'"+">"+
	"<img class='imageTileClass' id="+"'img_id"+tileName+"'"+" src="+Tile.image_location+">"+
	"</button>"+"</div>"
	$(tileToBeAppended).appendTo("#"+frameName);
	var colorCode = 1;
	if(Tile.value == 1 || Tile.value == 8 || Tile.value == 0 || Tile.value == 7)
		colorCode = 0;
	$("#"+"div_id"+tileName).css({position: 'absolute', left: Tile.coord.leftCoord, top: Tile.coord.topCoord, backgroundColor: COLOR_TILES[colorCode]});
		
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