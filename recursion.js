/**
 * Big to Small num
 * @param {number} n - 10
 * @returns {number} descending order
 */
// const bigToSmallNum = (n = 0) => {
// 	if (typeof n !== 'number') {
// 		return 'Invalid Argument';
// 	}
// Through the for loop
// for (let i = n; i > 0; i--) {
// 	console.log(i);
// }

// Through the recursion
// 	console.log(n);
// 	n--;
// 	if (n > 0) {
// 		bigToSmallNum(n);
// 	}
// };

// console.log(bigToSmallNum(100));

// const sumOfNumber = (n = 0) => {
// 	Through the for loop
// 	let sum = 0;
// 	for (let i = n; i > 0; i--) {
// 		sum += i;
// 	}

// 	Through the recursion
// 	if (n < 0) return 0;
// 	return n + sumOfNumber(n - 1);
// };

// console.log(sumOfNumber(10));

const sumOfArray1 = (arr = []) => {
	if (arr.length === 0) return 0;
	let rest = arr.slice(1);
	return arr[0] + sumOfArray1(rest);
};

const sumOfArray2 = (arr = []) => {
	return helperFun(arr, 0);
};

const helperFun = (arr, index) => {
	if (arr.length === index) return 0;
	return arr[index] + helperFun(arr, index + 1);
};

const input = new Array(8960).fill(1);
console.log(input);

let now = Date.now();
console.log(sumOfArray1(input));
let finish = Date.now();
console.log(`Time latency is: ${finish - now} ms`);

let start = Date.now();
console.log(sumOfArray2(input));
let end = Date.now();
console.log(`Time latency is: ${end - start} ms`);
