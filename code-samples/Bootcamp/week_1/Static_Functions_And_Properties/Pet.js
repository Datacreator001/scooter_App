class Pet {
	constructor(name, type, gender) {
		this.name =
			gender === 'Male'
				? 'King-' + name[0].toUpperCase() + name.slice(1)
				: 'Queen-' + name[0].toUpperCase() + name.slice(1);
		this.type = type;
	}

	static checkType(type) {
		const validation = ['cat', 'dog', 'fish', 'bird'];
		return validation.includes(type);
	}

	static checkName(name) {
        // K i n g - Baguette
        // 0 1 2 3 4 5
		const idxOfDash = name.indexOf('-'); //4
		const prefix = name.slice(0, idxOfDash + 1); //King-
		let prefixCheck; //
		let firstLetterOfName = name[idxOfDash + 1] === name[idxOfDash + 1].toUpperCase() // B === B //true
       if (prefix === 'King-' || prefix === 'Queen-') {
            prefixCheck = true
       }else {
            prefixCheck = false
       }

		(prefixCheck && firstLetterOfName) ? true : false;
        
	}
}

console.log(Pet.checkName('Queen-James'));
let james = new Pet('james', 'dog', 'Male');


/*Create a class called Pet


2)  The Pet class should have a name, and type property.

3) The pet can only be either:
Dog, Cat, Bird, or Fish.

4) The name of the pet needs to have a prefix of King or Queen followed by their name. The first letter of their name needs to be Capitalized.
Ex: Queen-Nemo, King-Baguette 

5) Write a few static methods to check the type of pet, and name.*/
