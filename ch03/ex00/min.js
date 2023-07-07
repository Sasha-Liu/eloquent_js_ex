
/*
	declare ft_min to be a function
*/
function	ft_min(a, b) {
	return (a < b ? a : b);
}
console.log(ft_min(1, 10));

/*
	define v_min to hold a function variable
*/

let	v_min = function(a, b) {
	return (a < b ? a : b);
}
console.log(v_min(10, 100));

/*
	create function with =>
*/
let v_min2 = (a, b) => a < b ? a : b;
console.log(v_min2(100, 1000));