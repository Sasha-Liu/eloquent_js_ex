function	countChar(str, c) {
	let	count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == c) {
			count++;
		}
	}
	return (count);
}

let	countBs = function(str) {
	return (countChar(str, 'B'));
}

console.log(countBs("123456 B B B B ddbb"));