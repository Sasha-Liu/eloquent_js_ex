
/*
	Use the reduce method in combination with the concat method to “flatten”
	an array of arrays into a single array that has all the elements of the original
	arrays
*/
function	flatten(arrays) {
	let	result = [];
	for (let array of arrays) {
		let	temp = array.reduce((a1, a2) => a1.concat(a2));
		result.push(temp);
	}
	return (result);
}

let test = [["a", "b", "c"], ["1", "2", "3"], ["A", "B", "C"], ["3", "2", "1"]];
console.log(flatten(test));
