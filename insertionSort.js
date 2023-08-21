function insertionSort(arr = []) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				let temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			} else {
				break;
			}
		}
	}
	return arr;
}

console.log(insertionSort([5, -4, 6, 3, 8, 9, 2]));
