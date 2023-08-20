console.log('Wellcome');

const testFunc = async () => {
	const time = Date.now() + 7000;
	function waiting() {
		while (time > Date.now()) {}
		console.log('End the waiting time');
	}

	return await waiting();
};
testFunc();

console.log('Thanks');
