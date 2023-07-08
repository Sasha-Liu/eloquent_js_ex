
function	arrayToList(input) {
	let	list = null;
	let	prepend = function (value, list) {
		return ({value: value, next: list});
	}
	for (let i = input.length - 1; i >= 0; i--) {
		list = prepend(input[i], list);
	}
	return (list);
}

function	listToArray(list) {
	let	tab = [];
	while (list) {
		tab.push(list.value);
		list = list.next;
	}
	return (tab);
}

function	nth(list, num) {
	if (!list || num < 0) {
		return ;
	}
	if (num == 0) {
		return (list);
	}
	return (nth(list.next, --num));
}

let	test = ["a", "b", "c", "d", "e", "f"];
let	list = arrayToList(test);
test = listToArray(list);

console.log(list);
console.log(test);
console.log(nth(list, -1));
console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 2));
console.log(nth(list, 3));
