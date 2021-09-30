class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	static checkName(name) {
		return typeof Person === 'string' ? true : false;
	}
	isString() {
		return typeof this.name === 'string' ? true : false;
	}
}

let newPerson = new Person('bob', 35);
let newPerson2 = new Person('Nick', 25);

console.log(Person.isString('nick'));
