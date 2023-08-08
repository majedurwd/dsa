/**
 * Create a character counter
 * @param {string}
 * @return {object}
 */

const characterCount = function (str = '') {
	if (typeof str !== 'string' || str.length === 0) {
		return 'Invalid argument';
	}
	const newStr = str.replace(/[^a-zA-Z]/g, '');
	let charList = {};
	for (let i = 0; i < newStr.length; i++) {
		let char = newStr[i].toLowerCase();
		if (charList[char] > 0) {
			charList[char]++;
		} else {
			charList[char] = 1;
		}
	}
	return charList;
};

console.log(
	characterCount(
		'Hello, this is Bing. I am happy to help you understand how to use regular expressions in JavaScript.'
	)
);
