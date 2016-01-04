/*
	This file has the basic properties about the Tiles and what all they should have
*/




/*This class uses the color property of the tile and the color of the tile is set accordingly*/

function Color() {
	//only one can be true at a time
	this.BLUE = false;
	this.RED = false;
	this.GREEN = false;
	this.setBLUE = function () {this.BLUE = true; this.RED = false; this.GREEN = false; };
	this.setRED = function () {this.BLUE = false; this.RED = true; this.GREEN = false; };
	this.setGREEN = function () {this.BLUE = false; this.RED = false; this.GREEN = true; };
	this.setNO_COLOR = function () {this.BLUE = false; this.RED = false; this.GREEN = false; };
	this.equals = function (other) {if (this.BLUE === other.BLUE && this.RED === other.RED && this.GREEN === other.GREEN) {return true; } else {return false; } };
}

//Creating the enum objects
//Call this in the set parameters function 
function setEnumColor() {
	BLUE = new Color();
	GREEN =  new Color();
	RED = new Color();
	GREEN = new Color();
	NO_COLOR = new Color();
	BLUE.setBLUE();
	RED.setRED();
	GREEN.setGREEN();
	NO_COLOR.setNO_COLOR();
	console.log("Different colours created used for creating Enum");
}

/*
	This class has the two dimensional address of the tile in the matrix.
*/
function Coordinates(x,y,leftCoord,topCoord){
	
	this.x = x;
	this.y = y;
	/*Is set initially passed null, need to be assigned before we could place the tiles*/
	this.leftCoord = leftCoord;
	this.topCoord = topCoord;
	this.equals = function(other){
					if(this.x === other.x && this.y === other.y)
						return true;
				};
	this.setCoord = function(other){
					this.leftCoord = other.leftCoord;
					this.topCoord = other.topCoord;
				};
}


/*There two types of Colors defined*/
function Tiles(value,coord){

	//coord is a Coordinate type variable
	this.value = value;
	this.coord = coord;
	this.color = new Color();
	this.color.setBLUE();
	this.image_location = IMAGE_TILES[value];
	this.updateColor = function(color){
						if(color.equals(BLUE)){this.color.setBLUE();}
						else if(color.equals(RED)){this.color.setRED();}
						else if(color.equals(GREEN)){this.color.setGREEN();}
						else{this.color.setNO_COLOR();}
					};
	this.updateValue = function(new_value){
						//It should not work if the sum of values is more than eight
						if(new_value<=MAX_NUM_ALLOWED){
							this.value = new_value;
							this.image_location = IMAGE_TILES[value];
						}
					};
	this.sum = function(other){
					var temp = this.value+other.value;
					this.updateValue(temp);
					other.updateValue(temp);
			   };
	this.equals = function(other){
					if(this.coord.equals(other.coord))
						return true;
					else
						return false;
				};
	this.getTileName = function(){
					var leftCoord = this.coord.leftCoord;
					var topCoord = this.coord.topCoord;
					return "Tile_"+leftCoord.toString()+"_"+topCoord.toString();
				};
}
/*This pair is used to store on stack as a reference to state of Tiles changed */
function pairTiles(tile_1,tile_2){
	this.tile_1 = tile_1;
	this.tile_2 = tile_2;
}

/*This function sets the matrix to a random legal value*/
function setMatrix(size_of_matrix){
	console.log('Generating random matrix of '+size_of_matrix+' X '+size_of_matrix);
	//getRandomTrueMatrix(size_of_matrix);
	getRandomSolvedMatix(size_of_matrix);
	var temp_str = '';
	for(var i=0;i<size_of_matrix;i++){
		temp_str = '';
		for(var j=0;j<size_of_matrix;j++){
			MATRIX[get1D(i,j)] = new Tiles(RAND_2D_ARRAY[get1D(i,j)],new Coordinates(i,j,null,null));
			temp_str = temp_str +' '+ MATRIX[get1D(i,j)].value.toString();
		}
		console.log(temp_str);
	}
}

