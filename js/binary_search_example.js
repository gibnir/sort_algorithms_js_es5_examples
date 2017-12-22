'use strict';

/*
binary search example:

check if number is in array.

input:
array sorted in numerical order.
integer number.

output:
number in array / number not in array. 

*/

// let number = 70; // not in array 
// let number = 3; // in array part 1
let number = 52; // in array part 2 


// let array = []; // empty array
// let array = [2,3,7,8,24,52]; // even array
let array = [2,3,7,8,9,24,52]; // odd array

function binarySort (num,arr) {
	if (arr.length === 0) {
		return 'output: empty array.';
	}

	let isEven = arr.length % 2 === 0;
	// console.log('isEven: ' , isEven);
	let startIndex = isEven ? (arr.length/2 - 1) : (arr.length-1)/2;	
	startIndex = ( num < arr[startIndex] ) ? 0 : startIndex+1 ;
 	// console.log('startIndex: ' ,startIndex);
	
	let index = startIndex;

	while (num >= arr[index]) {
		// console.log('num: ' , num);
		// console.log('arr index: ' ,index);
		console.log(num >= arr[index]);
		if (num === arr[index]) {
			return 'the number ' + num + ' is in the array , index: ' + index;
		}
		index++;
	}

	return 'number not in array.';
}


console.log(binarySort(number,array));