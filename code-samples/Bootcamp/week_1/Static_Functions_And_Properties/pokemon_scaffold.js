class Pokemon {
	//reveal this last
	static pokemons = [];

	constructor(name, number, type, hp, attackDamge) {
		this.name = name;
		this.number = number;
		this.type = type;
		this.hp = hp;
		this.attackDamge = attackDamge
		
	}

	static nameIsString(name) {
		return typeof name === 'string';
	}

	static numberIsTypeNumber(number) {
		return typeof number === 'number';
	}

	static isValidType(type) {
		const elements = [
			'Fire',
			'Grass',
			'Dark',
			'Earth',
			'Ghost',
			'Lighting',
			'Pyschic',
		];
		return elements.includes(type);
	}

	static isValidHp(hp) {
		return hp >= 50 || hp <= 250 ? true : false;
	}

	assignType(type) {
		this.type = type;
	}
}



module.exports = Pokemon;
