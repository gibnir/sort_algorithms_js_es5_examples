'use strict';

/*
	recursion function.
	input: integer numbr.
	output: console the numbers, stop when input = 0 .
*/

function recursion (input) {
	// stop recursion condition.
	// console.log(input);
	if (input <= 0) {
		return input;
	}
	// recursion + changing state.
	let x = recursion(input - 1);

	return x;
}


console.log('end result: ' , recursion(5));