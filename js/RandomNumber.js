/**
*	This has functions to generate numbers randomly.
* 	It generates matrix which is solvable.
*/

function get_random_num(max_num_allowed){
	var prob = Math.random();
	var rand = Math.floor(prob * (max_num_allowed+1));
	//console.log("PROB= "+prob+"rand= "+rand+"max_num_allowed = "+max_num_allowed);
	return rand;
}


function getRandomTrueMatrix(size_of_matrix){
	console.log('Trying to generate as good matrix as possible, for which solution may exist');
	var count_0 = 0;
	var count_1 = 0;
	for(var i=0;i<size_of_matrix;i++){
		for(var j=0;j<size_of_matrix;j++){
			RAND_2D_ARRAY[get1D(i,j)] = get_random_num(MAX_NUM_ALLOWED);
			if(RAND_2D_ARRAY[get1D(i,j)] === 1)
				count_1++;
			else if(RAND_2D_ARRAY[get1D(i,j)] === 0)
				count_0++;
		}
	}
	//Make sure that matrix has at least one 1 and at least one 0
	if(count_0 === 0||count_1 === 0)
		getRandomTrueMatrix(size_of_matrix);
}

function getRandomSolvedMatix(size_of_matrix){
	var count_0 = 0;
	var count_1 = 0;
	var count_7 = 0;
	var count_8 = 0;
	for(var i=0;i<size_of_matrix;i++){
		for(var j=0;j<size_of_matrix;j++){
			//rand_num below represents a random number between 0-3, where 0-3 number maps to 0,1,7,8 respectively 
			var rand_num = get_random_num(3);
			var num;
			//console.log(""+rand_num);
			switch(rand_num){
				case 0:
						num = 0;
						count_0++;
						break;
				case 1: 
						num = 1;
						count_1++;
						break;
				case 2:
						num = 7;
						count_7++;
						break;
				case 3:
						num = 8;
						count_8++;
						break;
			}
			RAND_2D_ARRAY[get1D(i,j)] = num;
		}
	}
	if(count_0 == 0 || count_1 == 0 || count_7 ==0 || count_8 == 0)
		getRandomSolvedMatix(size_of_matrix);
	if(LEVEL == 1){
		console.log("LEVEL==1");
		console.log("7 ==  "+count_7+" and 8 ==  "+count_8);
		var freq = (count_7 + count_8)/(size_of_matrix*size_of_matrix);
		if(freq > MAX_FREQ_7_AND_8_LEVEL_1)
			getRandomSolvedMatix(size_of_matrix);
	}
	else if(LEVEL == 2){
		console.log("LEVEL==2");
		console.log("0 ==  "+count_0+" and 1 ==  "+count_1);
		var freq = (count_0 + count_1)/(size_of_matrix*size_of_matrix);
		if(freq > MAX_FREQ_0_AND_1_LEVEL_2)
			getRandomSolvedMatix(size_of_matrix);
	}
	else if(LEVEL == 3){
		console.log("LEVEL==3");
		console.log("0 ==  "+count_0+" and 1 ==  "+count_1);
		var freq = (count_0 + count_1)/(size_of_matrix*size_of_matrix);
		if(freq > MAX_FREQ_0_AND_1_LEVEL_3)
			getRandomSolvedMatix(size_of_matrix);
	}
	//call unsolved matrix function here
	getUnsolvedMatrix(size_of_matrix);
	//var permutation = getRandomPermutationOfDirections();
	//for(var i=0;i<8;i++)
		//console.log("permutation[i] ==  "+permutation[i]);
	//var position = getNumberInMatrix(7,MATRIX_SIZE);
	//for(var i=0;i<4;i++){
		//console.log("position[i] ==  "+position[i]);
	//}
}

function getRandomPermutationOfDirections(){
	var is_set_directions = new Array();
	for(var i=0;i<=7;i++)
		is_set_directions[i] = false;
	var permutation = new Array();
	var index = 0;
	while(index <= NO_OF_DIRECTIONS-1){
		var rand_num = get_random_num(NO_OF_DIRECTIONS-1);
		if(is_set_directions[rand_num] == false){
			permutation[index++] = rand_num;
			is_set_directions[rand_num] = true;
			//console.log("Set number ==  "+rand_num);
		}
	}
	return permutation ;
}

function getAdjacentMatchingNumberInMatrix(number,i1,j1,size_of_matrix){
	var permutation = getRandomPermutationOfDirections();
	var i2 = -1,j2 = -1;
	var flag_found = false;
	var position = new Array();
	for(var index=0;index<=NO_OF_DIRECTIONS-1 && flag_found == false;index++){
		switch(permutation[index]){
			case 0:
					if(j1<size_of_matrix-1 && RAND_2D_ARRAY[get1D(i1,j1+1)] == number){
						i2 = i1;
						j2 = j1+1;
						flag = true;
					}
					break;
			case 1:
					if(j1>0 && RAND_2D_ARRAY[get1D(i1,j1-1)] == number){
						i2 = i1;
						j2 = j1-1;
						flag = true;
					}
					break;
			case 2:
					if(i1<size_of_matrix-1 && RAND_2D_ARRAY[get1D(i1+1,j1)] == number){
						i2 = i1+1;
						j2 = j1;
						flag = true;
					}
					break;
			case 3:
					if(i1>0 && RAND_2D_ARRAY[get1D(i1-1,j1)] == number){
						i2 = i1-1;
						j2 = j1;
						flag = true;
					}
					break;
			case 4:
					if(j1>0 && i1>0 && RAND_2D_ARRAY[get1D(i1-1,j1-1)] == number){
						i2 = i1-1;
						j2 = j1-1;
						flag = true;
					}
					break;
			case 5:
					if(j1<size_of_matrix-1 && i1<size_of_matrix-1 && RAND_2D_ARRAY[get1D(i1+1,j1+1)] == number){
						i2 = i1+1;
						j2 = j1+1;
						flag = true;
					}
					break;
			case 6:
					if(j1<size_of_matrix-1 && i1>0 && RAND_2D_ARRAY[get1D(i1-1,j1+1)] == number){
						i2 = i1-1;
						j2 = j1+1;
						flag = true;
					}
					break;
			case 7:
					if(i1<size_of_matrix-1 && j1>0 && RAND_2D_ARRAY[get1D(i1+1,j1-1)] == number){
						i2 = i1+1;
						j2 = j1-1;
						flag = true;
					}
					break;
		}
	}
	position[0] = i2;
	position[1] = j2;
	return(position);
}

var TRIES_GET_NUMBER_IN_MATRIX;
var NO_OF_BREAKS;

function getNumberInMatrix(number,size_of_matrix){
	TRIES_GET_NUMBER_IN_MATRIX++;
	if(TRIES_GET_NUMBER_IN_MATRIX > TRIES_GET_NUMBER_IN_MATRIX_LIMIT)
		return null;
	var i = get_random_num(size_of_matrix-1);
	var j = get_random_num(size_of_matrix-1);
	if(RAND_2D_ARRAY[get1D(i,j)] == number){
		var position = getAdjacentMatchingNumberInMatrix(number,i,j,size_of_matrix);
		if(position[0] == -1 || position[1] == -1)
			return getNumberInMatrix(number,size_of_matrix);
		else{
			position[2] = i;
			position[3] = j;
			return position ;
		}
	}
	else
		return getNumberInMatrix(number,size_of_matrix);
}

function split(number,number1,position){
	number1 = Math.floor(number1);
	var number2 = number - number1;
	RAND_2D_ARRAY[get1D(position[0],position[1])] = number1;
	RAND_2D_ARRAY[get1D(position[2],position[3])] = number2;
	//console.log("Split:  "+position[0]+" , "+position[1]+" == "+number1);
	//console.log("Split:  "+position[2]+" , "+position[3]+" == "+number2);
	NO_OF_BREAKS = NO_OF_BREAKS + 1;
}

function getUnsolvedMatrix(size_of_matrix){
	NO_OF_BREAKS = Number(0);
/*	 while(1){
		var number = 8;
		var rand_num;
		TRIES_GET_NUMBER_IN_MATRIX = 0;
		var position = getNumberInMatrix(number,size_of_matrix);
		if(position != null){
			rand_num = get_random_num(4);  
			if(rand_num != 4 || rand_num != 3) //lets say we choose 4-4 split with 60% probability
				split(8,4,position);
			else if(rand_num == 3)
				split(8,5,position);
			else if(rand_num == 4)
				spliT(8,2,position);
		}
		else
			break;
	}
	while(1){
		var number = 7;
		var rand_num;
		TRIES_GET_NUMBER_IN_MATRIX = 0;
		var position = getNumberInMatrix(number,size_of_matrix);
		if(position != null){
			rand_num = get_random_num(4);  
			if(rand_num != 4 || rand_num != 3) //lets say we choose 4-3 split with 60% probability
				split(7,4,position);
			else if(rand_num == 3)
				split(7,5,position);
			else if(rand_num == 4)
				split(7,1,position);			
		}
		else
			break;
	}*/
	var number = MAX_NUM_ALLOWED;
	while(number >= 2){
		var rand_num;
		while(1){
			TRIES_GET_NUMBER_IN_MATRIX = 0;
			var position = getNumberInMatrix(number,size_of_matrix);
			if(position != null){
				rand_num = get_random_num(4);  
				if(rand_num != 4 || rand_num != 3) //lets say we choose 4-3 split with 60% probability
					split(number,Math.floor(number/2),position);
				else if(rand_num == 3)
					split(number,number/3,position);
				else if(rand_num == 4)
					split(number,number/4,position);			
			}
			else
				break;
		}
		number--;
	}
	console.log("Breaks ==  "+NO_OF_BREAKS.toString());
	//if(NO_OF_BREAKS < BREAKS_MIN_LIMIT)
		//getRandomSolvedMatix(size_of_matrix);
}