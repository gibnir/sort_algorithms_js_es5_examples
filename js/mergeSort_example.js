'use strict';

/*
	mergeSort_example.
*/

// let array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
let array = [34, 203, 3, 746, 200, 984, 198, 764];

function mergeSort (arr) {
	let leftArr = [],
		rightArr = [],
		mid = 0;

		// console.log('arr: ' , arr);
		// console.log('arr.length < 2: ' , arr.length < 2);

		if (arr.length < 2) {
			// console.log('arr.length < 2 condition working.');	
			return arr;
		}

		mid = parseInt(arr.length/2);
		// mid = Math.floor(arr.length/2);
		leftArr = arr.slice(0,mid);
		rightArr = arr.slice(mid, arr.length);
		
		return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge (leftArr, rightArr) {
	
	let mergedArr = [],
		index = 0,
		indexLeft = 0,
		indexRight = 0;

	while (leftArr.length > indexLeft && rightArr.length > indexRight ) {
		
		if (leftArr[indexLeft] <= rightArr[indexRight]) {
			mergedArr.push(leftArr[indexLeft]);
			indexLeft++;
		} else {
			mergedArr.push(rightArr[indexRight]);
			indexRight++;
		}
		index++;
	}

	while (leftArr.length > indexLeft) {
		mergedArr.push(leftArr[indexLeft]);
		indexLeft++;
		index++;
	}
	while (rightArr.length > indexRight) {
		mergedArr.push(rightArr[indexRight]);
		indexRight++;
		index++;
	}

	return mergedArr;
}

console.log(mergeSort(array));