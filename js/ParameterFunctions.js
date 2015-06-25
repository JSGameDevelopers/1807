function setParameters(){
    LEVEL=$('input[name=level]:checked', '#level').val();
    GAME_TYPE=$('input[name=playerOption]:checked', '#level').val();
    var sizeOfMatrix=$('input[name=numOfCoins]:checked','#level').val();
    if(sizeOfMatrix === "FIRST"){
        MATRIX_SIZE = 4;
    }
    else if(sizeOfMatrix === "SECOND"){
        MATRIX_SIZE = 6;
    }
    else
        MAXTRIX_SIZE = 10;
	console.log("Level set to "+LEVEL);
	console.log("Game type set to "+GAME_TYPE);
	console.log("Matrix size set to "+MATRIX_SIZE);
    /*NUM_OF_COINS_LEFT_IN_THE_GAME=NUM_OF_COINS;
    if(GAME_TYPE === "SINGLE_PLAYER"){
       $("#level").html(
	   "<div id='Continue'>"+
               "Do you want to make the first move?<br>"+
               "<input type='radio' checked='checked' name='selectFirstPlayerOpn' value='Player1'/>yes &nbsp;"+
               "<input type='radio' name='selectFirstPlayerOpn' value='Player2'/>no<br>"+
               "<button id='ContinueBtn' onclick='startGame()'><img src='images/ContinueBtn.jpg'/></button>"+
		"</div>");
       $("#Continue").focus();
    }
    else{
       startGame();
    }*/
}

function setImages(){
	IMAGE_TILES[0] = img_0;
	IMAGE_TILES[1] = img_1;
	IMAGE_TILES[2] = img_2;
	IMAGE_TILES[3] = img_3;
	IMAGE_TILES[4] = img_4;
	IMAGE_TILES[5] = img_5;
	IMAGE_TILES[6] = img_6;
	IMAGE_TILES[7] = img_7;
	IMAGE_TILES[8] = img_8;
}