
function	isEven(num) {
	if (num == 0) {
		return (true);
	} else if (num == 1) {
		return (false);
	} else if (num > 0) {
		return (isEven(num - 2));
	} else {
		return (isEven(num + 2));
	}
}

let isOdd = function(num) {
	if (num == 0) {
		return (false);
	} else if (num == 1) {
		return (true);
	} else if (num > 0) {
		return (isOdd(num - 2));
	} else {
		return (isOdd(num + 2));
	}	
}

console.log(isEven(100));
console.log(isOdd(99));
console.log(isOdd(-1));
console.log(isEven(0));

