
let	range = function (start, end, step = 1) {
	let	temp = [];
	if ((start - end) * step > 0) {
		return (temp);
	}
	if (start < end) {
		for (let i = start; i <= end; i += step) {
			temp.push(i);
		}
	} else {
		for (let i = start; i >= end; i += step) {
			temp.push(i);
		}
	} 
	return (temp);
}

let sum = function (number) {
	let	temp = 0;
	for (let x = 0; x < number.length; x++) {
		temp += number[x];
	}
	return (temp);
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(10, 1, -1));
console.log(sum(range(10, 1, -1)));

/*	
 * 	alternative sum
 */
sum = function (... number) {
	let	temp = 0;
	for (let x of number) {
		temp += x;
	}
	return (temp);
}
console.log(range(1, 10));
console.log(sum(... range(1, 10)));
console.log(range(10, 1, -1));
console.log(sum(... range(10, 1, -1)));