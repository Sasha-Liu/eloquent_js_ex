
let size = 10;
let	line1 = "";
let	line2 = "";

for (let i = 0; i < size; i += 2) {
	line1 += " #";
	line2 += "# ";
}

if (size % 2) {
	line1 += " ";
	line2 += "#";
}

for (let i = 0; i < size; i++) {
	if (i % 2 == 0) {
		console.log(line1);
	}
	else {
		console.log(line2);
	}
}