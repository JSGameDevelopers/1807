//Helper function to calculate the coordinates
//of a tile given its position in the matrix.
function getFreeLocation(x,y){
	var heightOfGameFrame = Number($("#gameFrame").height());
	var widthOfGameFrame = Number($("#gameFrame").width());
	if(x==0 && y==0)
		console.log("H/W=="+heightOfGameFrame.toString()+widthOfGameFrame.toString())
	var leftStart = (widthOfGameFrame - MATRIX_SIZE*TILE_SIZE - (MATRIX_SIZE-1)*TILE_SPACING)/2;
	var leftCoord = leftStart + y*(TILE_SIZE+TILE_SPACING);
	var topStart = (heightOfGameFrame - MATRIX_SIZE*TILE_SIZE - (MATRIX_SIZE-1)*TILE_SPACING)/2;
	var topCoord = topStart + x*(TILE_SIZE+TILE_SPACING);
	var coord = new Coordinates(x,y,leftCoord,topCoord);
	return coord;
}

//calculates coordinates of all tiles in MATRIX wrt to #gameFrame.
function positionTiles(size_of_matrix){
	for(var i=0;i<size_of_matrix;i++){
		for(var j=0;j<size_of_matrix;j++){
		var calculatedCoord = getFreeLocation(i,j);
		MATRIX[get1D(i,j)].coord.setCoord(calculatedCoord);
		console.log(i.toString()+ " , "+ j.toString()+ " at "+calculatedCoord.leftCoord.toString()+" , "+calculatedCoord.topCoord.toString());
		}
	}
}