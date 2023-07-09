/*
		Write a higher-order function loop that provides something like a for loop
	statement. It takes a value, a test function, an update function, and a body
	function. Each iteration, it first runs the test function on the current loop value
	and stops if that returns false. Then it calls the body function, giving it the
	current value. Finally, it calls the update function to create a new value and
	starts from the beginning.
		When defining the function, you can use a regular loop to do the actual
	looping.
*/

function	myLoop(inputs, testFunc, updateFunc, bodyFunc) {
	for (let i in inputs) {
		if (inputs.hasOwnProperty(i) === false) {
			continue ;
		}
		if (testFunc(inputs[i]) === false) {
			return ;
		}
		bodyFunc(inputs[i]);
		inputs[i] = updateFunc(inputs[i]);
	}
}

let	test = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
let	testF = function (x) {
	return (x > 0);
}
let	bodyF = function (x) {
	console.log("bodyF: ", x);
}
let	updateF = function (x) {
	return (10 * x);
}
console.log("Before: ", test);
myLoop(test, testF, updateF, bodyF);
console.log("After: ", test);

