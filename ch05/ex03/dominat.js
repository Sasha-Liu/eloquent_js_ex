
require("./scripts.js");

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function	dominantDir(text) {
	let	dirs = countBy(text, c => {
		let script = characterScript(c.codePointAt(0));
		return (script ? script.direction : "none");
	}).filter(({name}) => name != "none");
	console.log("dirs: ", dirs);

	let	total = dirs.reduce((sum, {count}) => sum + count, 0);
	console.log("total: ", total);
	if (total === 0)	return ("No scripts found");
	
	let res = dirs.map(({name, count}) => {
		let	ratio = Math.round(count * 100 / total);
		return (`${name}: ${ratio}%`);
	}).join("\n");

	return (res);
}

console.log(dominantDir("Hey, مساء الخير"));



