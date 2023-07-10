
/*
	the Vec class
*/
class	Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(rhs) {
		return new Vec(this.x + rhs.x, this.y + rhs.y);
	}
	minus(rhs) {
		return new Vec(this.x - rhs.x, this.y - rhs.y);
	}
	get length () {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}
}

let	vec1 = new Vec(2, 2);
let	vec2 = new Vec(-3, 4);
console.log(vec1);
console.log(vec2);
console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.length);
console.log(vec2.length);