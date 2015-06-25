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
	/*Here your display functions will be called to display the various cells. The Matrix variable has the tiles* Use Matrix[get1D(i,j)] to get i row and jth
	 * column of the matrix
	*/
	/*You also got to store the tiles pixel location*/
	var temp_str = '';
	for(var i=0;i<MATRIX_SIZE;i++){
		for(var j=0;j<MATRIX_SIZE;j++){
			temp_str = temp_str + ' ' + MATRIX[get1D(i,j)].value.toString();
		}
		temp_str = temp_str + '<br>';
	}
	
	$("#gameFrame").html("");
	$("#gameFrame").append("<div id='tilePlane'>The tiles go here</div>");
	$("#tilePlane").after("<div id='inMatrix'></div>");
	$("#inMatrix").html(temp_str);
	$("#inMatrix").after("<div id='playAgain'><button id='playAgainBtn' onclick="+"loadPage('GameFrame.html')"+">Play Again</div>");
	/*
	 * You need to work in these divs inMatrix , tilePlane, playAgain. Don't create a fresh page and add divs there 
	 * All divs should be added dynamically otherwise there will be loss of the computed data. So you can not use loadPage unless you are going 
	 * back to the same page. Use jquery or pure javascript to create or modify or change the properties of the div.
	 * Also for sample I have put images here delete this div when u complete.
	 */
	 $("#playAgain").after("<div id='tempDiv'></div>");
	 for(var i=0;i<=MAX_NUM_ALLOWED;i++)
			if(i%3===1)
				$("#tempDiv").append("<img src="+IMAGE_TILES[i]+"><br>");
			else
				$("#tempDiv").append("<img src="+IMAGE_TILES[i]+">");
 }