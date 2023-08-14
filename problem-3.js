/**
 * Check Corresponding value
 * @param {Array}
 * @return {Boolean}
 */

const correspondingValue = (array1 = [], array2 = []) => {
	if (array1.length < 1 || array1.length !== array2.length) return false;
	for (let index = 0; index < array1.length; index++) {
		const currentIndex = array2.indexOf(array1[index] ** 2);
		if (currentIndex === -1) return false;
		array2.splice(currentIndex, 1);
	}
	return true;
};

console.log(correspondingValue([3, 7, 5, 7], [25, 49, 49, 9]));
