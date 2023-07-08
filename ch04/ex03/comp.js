function	deepEqual(x, y) {
	if (x === y) {
		return (true);
	}
	if (x === null || y === null) {
		return (false);
	}
	if (!((typeof x === "object") && (typeof y === "object"))) {
		return (false);
	}
	if (Object.keys(x).length !== Object.keys(y).length) {
		return (false);
	}
	for (let key in x) {
		if (key in y === false) {
			return (false);
		} else if (!deepEqual(x[key], y[key])) {
			return (false);
		}
	}
	return (true);
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1.2, 1.2));
console.log(deepEqual("abc", "abc"));
console.log(deepEqual(true, true));
console.log(deepEqual(null, null));
console.log(deepEqual(undefined, undefined));
console.log(deepEqual({ value: 1, next: { value: 2, next: null } }, { value: 1, next: { value: 2, next: null } }));

console.log("/*  -------------------  */")
console.log(deepEqual(1, 2));
console.log(deepEqual(1.3, 1.2));
console.log(deepEqual("abr", "abc"));
console.log(deepEqual(false, true));
console.log(deepEqual(null, undefined));
console.log(deepEqual(undefined, null));
console.log(deepEqual({a: 1}, {b: 2}));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3, c: 3 }));
console.log(deepEqual({ value: 1, next: { value: 2, next: undefined } }, { value: 1, next: { value: 2, next: null } }));
console.log(deepEqual({ value: 1, next: { value: 2, next: 7 } }, { value: 1, next: { value: 2, next: null } }));