let	test = {hasOwnProperty: "hello", x: 1, y: 2, z: 3};

console.log(test);
console.log(test.hasOwnProperty);
console.log(Object.hasOwnProperty.apply(test, ['x']));
console.log(Object.hasOwnProperty.call(test, 'x'));