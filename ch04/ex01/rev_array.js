function	revNewArray(tab) {
	let	temp = [];
	for (let i = tab.length - 1; i >= 0; i--) {
		temp.push(tab[i]);
	}
	return (temp);
}

function	revInPlace(tab) {
	let	head = 0;
	let	tail = tab.length - 1;
	let	temp;
	while (head < tail) {
		temp = tab[head];
		tab[head] = tab[tail];
		tab[tail] = temp;
		head++;
		tail--;
	}
}

let	test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let	rev = revNewArray(test);

console.log("Original array: ", test);
console.log("revNewArray: ", rev);

revInPlace(rev);
console.log("reverse in place the reversed array: ", rev);