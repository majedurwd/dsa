function bubbleSort(arr = []) {
	let isSwap;
	for (let i = 0; i < arr.length; i++) {
		isSwap = false;
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwap = true;
			}
			console.log(arr, arr[j], arr[j + 1]);
		}
		if (!isSwap) break;
	}

	return arr;
}

const time1 = Date.now();
// console.log(bubbleSort([4, 6, 3, 12, 9, 32, 23, 56, 76, 11]));
console.log(bubbleSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

const time2 = Date.now();

console.log(`Time complexity: ${time2 - time1} ms`);

// let arr = [50, 40];
// let temp = arr[0];
// arr[0] = arr[0 + 1];
// arr[0 + 1] = temp;
// console.log(arr);
