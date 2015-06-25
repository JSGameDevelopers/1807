/**
*	This has functions to generate numbers randomly.
* 	It generates matrix which is solvable.
*/

function get_random_num(){
	var prob = Math.random();
	var rand = Math.floor(prob * MAX_NUM_ALLOWED);
	return rand;
}


function getRandomTrueMatrix(size_of_matrix){
	console.log('Trying to generate as good matrix as possible, for which solution may exist');
	var count_0 = 0;
	var count_1 = 0;
	for(var i=0;i<size_of_matrix;i++){
		for(var j=0;j<size_of_matrix;j++){
			RAND_2D_ARRAY[get1D(i,j)] = get_random_num();
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