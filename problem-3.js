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

// console.log(correspondingValue([3,2,6,4,7,9,8], [49, 4, 16, 81, 64, 36,9]));

// Improve the big o notation

const sameCorresponding = (array1=[],array2=[]) => {
	if (array1.length < 1 || array1.length !== array2.length) return false
	
	let sequenceCount1 = {}
	let sequenceCount2 = {}
	for (let val of array1) {
		sequenceCount1[val] = sequenceCount1[val] + 1 || 1
	}
	for (let val of array2) {
		sequenceCount2[val] = sequenceCount2[val] + 1 || 1
	}
	
	for (let key in sequenceCount1) {
		if (!(key ** 2) in sequenceCount2) {
			return false
		}

		if (sequenceCount2[key ** 2] !== sequenceCount1[key]) {
			console.log("Value checked");
			return false
		}
	}
	return true
}

console.log(sameCorresponding([3,2,6,4,7,9,8], [49, 4, 16, 81, 64, 36,9]));

