/**
 * Write a function take an array and a value. find the value from the array and return the index of where find the value
 * @param {Array, Number}
 * @returns {Number}
 */
const linearSearch = (array = [], value) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) return i;
	}
	return -1;
};

console.log(linearSearch([3, 4, 6, 2, 7, 9, 8], 10));
