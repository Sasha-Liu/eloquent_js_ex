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
	[Symbol.iterator]() {
		return new GroupIterator(this);	
	}
}

class	GroupIterator {
	constructor(group) {
		this.index = 0;
		this.group = group;
	}
	next() {
		if (this.index === this.group.data.length) return ({done: true});
		let	value = {value: this.group.data[this.index]};
		this.index++;
		return ({value, done: false});
	}
}

let	group = Group.from("ABCDEFGHI"[Symbol.iterator]());
console.log(group);
for (let x of group) {
	console.log(x);
}