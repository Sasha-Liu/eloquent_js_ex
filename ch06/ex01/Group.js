/*
	class Group 
*/
class	Group {
	constructor() {
		this.data = [];
	}
	add(value) {
		if (this.data.indexOf(value) === -1) {
			this.data.push(value);
		}
	}
	delete(value) {
		let	index = this.data.indexOf(value);
		if (index !== -1) {
			this.data.splice(index, 1);
		}
	}
	has(value) {
		if (this.data.indexOf(value) === -1) return (false);
		return (true);
	}
	static	from(iterator) {
		let	group = new Group;
		for (let item = iterator.next(); !item.done; item = iterator.next()) {
			group.add(item.value);
		}
		return (group);
	}
}

let	stringIter = "string"[Symbol.iterator]();
let	group1 = new Group;
group1.add("a");
group1.add("b");
group1.add("c");
let	group2 = Group.from(stringIter);

console.log(group1);
console.log(group2);

group1.delete('a');
group2.delete('X');
console.log(group1);
console.log(group2);

console.log(group1.has('b'));
console.log(group2.has('b'));