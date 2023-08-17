/**
 * Binary Search
 * @param {Array, key} array and key
 * @returns {Number} index
 */

const binarySearch = (array = [], key) => {
	let start = 0;
	let end = array.length - 1;
	while (start <= end) {
		let midlle = Math.ceil((start + end) / 2);
		if (array[midlle] === key) return midlle;
		if (key > array[midlle]) {
			start = midlle + 1;
		}
		if (key < array[midlle]) {
			end = midlle - 1;
		}
	}
	return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));
