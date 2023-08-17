/**
 * Find all odd numbers
 * @param {Array} array of number
 * @returns {Array}
 */
const findOddNumbers = (array = []) => {
	let oddNumbers = [];
	function helper(input = []) {
		if (input.length === 0) return;
		if (input[0] % 2 !== 0) {
			oddNumbers.push(input[0]);
		}
		helper(input.slice(1));
	}
	helper(array);

	return oddNumbers;
};

console.log(
	findOddNumbers([4, 3, 5, 7, 6, 8, 7, 6, 7, 8, 9, 80, 67, 5, 1, 3, 2])
);
