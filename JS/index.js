console.log("Bubble Sort");

// Function that swaps two numbers in an array.
const swapper = (index1, index2, array) => {
	// Store smaller number.
	const temp = array[index2];
	// Swap smaller number with larger number
	array[index2] = array[index1];
	array[index1] = temp;
};


const bubbleSort = (array) => {
	// Compare each number with all numbers in array
	for (let i = 0, len = array.length; i < len; i ++) {
		for (let j = i+1, len = array.length; j < len; j ++) {
			// If number is greater than proceeding number, swap.
			if (array[i] > array[j]) {
				swapper(i, j, array);
			};
		};
	};
	// Return sorted array.
	return array;
};


const numbers = [6,3,9,0,6,1,15,32,0,0,14,7,5,8];
bubbleSort(numbers);