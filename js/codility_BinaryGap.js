/*

A binary gap within a positive integer N is any maximal sequence of consecutive
zeros that is surrounded by ones at both ends in the binary representation of N.

For example,
number 9 has binary representation 1001 and contains a binary gap of length 2.
The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
The number 20 has binary representation 10100 and contains one binary gap of length 1.
The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N,
returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example,
given N = 1041 the function should return 5,
because N has binary representation 10000010001 and so its longest binary gap is of length 5.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).

*/

/*
input: integer
output: length of its longest binary gap
*/

/*

long solution

*/


function BinaryGap(number) {

	var countZeros = 0;
	var longestBinaryGap = 0;

	console.log('integer number: ', number);

	var convertedString = (number >>> 0).toString(2);

	console.log('binary number: ', convertedString);
	console.log('string lang: ' , convertedString.length-1);

	for (var i = convertedString.length-1;
			i >= 0;
				i--) {

		console.log('convertedString: ' , convertedString[i]);
		console.log('convertedString: ' , convertedString);

		if (convertedString[i] == 0) {
			convertedString = convertedString.slice(convertedString[i], convertedString.length-1);
		} else {
			break;
		}
	}	

	for (var index = 0; 
			index <= convertedString.length-1;
			index++) {

		if (convertedString[index] == 0) {
			countZeros++;
			if (countZeros > longestBinaryGap) {
				longestBinaryGap = countZeros;

				console.log('current binary gap: ' , longestBinaryGap);
			}
		} else {
			countZeros = 0;
		}
	}

	return longestBinaryGap;
}

console.log('final binary gap: ' , BinaryGap(102));
console.log('final binary gap: ' , BinaryGap(5));
console.log('final binary gap: ' , BinaryGap(529));
console.log('final binary gap: ' , BinaryGap(1041));
console.log('final binary gap: ' , BinaryGap(1024));
console.log('final binary gap: ' , BinaryGap(20)); // 10100
console.log('final binary gap: ' , BinaryGap(128));




/*
sort solution
*/

// function BinaryGap(number) {

// 	var countZeros = 0,
// 		longestBinaryGap = 0,
// 		convertedString = (number >>> 0).toString(2);

// 	for (var i = convertedString.length-1; i >= 0; i--) {
// 		if (convertedString[i] == 0) {
// 			convertedString = convertedString.slice(convertedString[i], convertedString.length-1);
// 		} else {
// 			break;
// 		}
// 	}	

// 	for (var index = 0; 
// 			index <= convertedString.length-1;
// 			index++) {

// 		if (convertedString[index] == 0) {
// 			countZeros++;
// 			if (countZeros > longestBinaryGap) {
// 				longestBinaryGap = countZeros;

// 				console.log('current binary gap: ' , longestBinaryGap);
// 			}
// 		} else {
// 			countZeros = 0;
// 		}
// 	}

// 	return longestBinaryGap;
// }