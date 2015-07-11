/**
 *  This is the most important .js file.
 *	It has the most important game engine of the game.
 *  Function start() has the game engine the infinite while loop.
 */
 

 function start(){
	console.log("Game Started");
	setParameters(); //Present in ParameterFunction.js file. It sets the parameter functions present in GameParameter.js
	setEnumColor(); //To set the Enum Color in file Tiles.js
	setImages();//to set Images to the array IMAGE_TILES. In the file ParameterFunction.js
	setMatrix(MATRIX_SIZE); // sets the Matrix variable with the tiles in the file Tiles.js
	/*var temp_str = '';
	for(var i=0;i<MATRIX_SIZE;i++){
		for(var j=0;j<MATRIX_SIZE;j++){
			temp_str = temp_str + ' ' + MATRIX[get1D(i,j)].value.toString();
		}
		temp_str = temp_str + '<br>';
	}*/
	
	$("#gameFrame").html("");
	$("#gameFrame").append("<div id='tilePlane'></div>");
	//$("#tilePlane").after("<div id='inMatrix'></div>");
	//$("#inMatrix").html(temp_str);
	$("#tilePlane").append("<div id='playAgain'><button id='playAgainBtn' onclick="+"loadPage('GameFrame.html')"+">Play Again</div>");
	positionTiles(MATRIX_SIZE); //assigns coordinates to all tiles in MATRIX in file InsertTiles.js
	displayAllTiles("tilePlane"); //displays all the tiles in MATRIX in file DisplayTiles.js
	listenerAllTiles(); //adds on click listener to all Tiles in MATRIX
	 /*	 $("#playAgain").after("<div id='tempDiv'></div>");
	 for(var i=0;i<=MAX_NUM_ALLOWED;i++)
			if(i%3===1)
				$("#tempDiv").append("<img src="+IMAGE_TILES[i]+"><br>");
			else
				$("#tempDiv").append("<img src="+IMAGE_TILES[i]+">");
	*/
 }