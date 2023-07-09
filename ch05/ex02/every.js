
function	every1(array, testFt) {
	for (let key in array) {
		if (array.hasOwnProperty(key) === false) {
			continue ;
		}
		if (testFt(array[key]) ===  false) {
			return (false);
		}
	}
	return (true);
}

function	not(f) {
	return (... args) => !f.apply(null, args);
}

function	every2(array, testFt) {
	if (array.some(not(testFt)) === false) {
		return (true);
	}
	return (false);
}

let test = [1, 2, 3, 4, 5, -1];
console.log(every1(test, x => x > 0));
console.log(every2(test, x => x > 0));

test = [1, 2, 3, 4, 5];
console.log(every1(test, x => x > 0));
console.log(every2(test, x => x > 0));

test = [];
console.log(every1(test, x => x > 0));
console.log(every2(test, x => x > 0));