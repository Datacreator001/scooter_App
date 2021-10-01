const User = require('./User');
const Scooter = require('./Scooter');
const City = require('./City')

class Nick extends User {
	constructor(age, payment, scooter, name) {
		super(age, payment, scooter);
		this.name = name;
	}
}

class ChargingStation {
	constructor(scooter, payment, maintenance, name, scooterType) {
		super()
		this.scooter = scooter;

		this.payment = payment;
		this.maintenance = maintenance;
		this.name = name;
		this.scooterType = [];
	}
	static ageCheck(age) {
		if (age < 18) {
			console.log(`${age} is not old enough`);
		} else {
			console.log(`Age ${age} is old enough and you may rent a scooter!`);
		}
	}
	static markedAsBroken(scooter) {
		if (scooter === 'No' || 'no') {
			console.log('Doesnt need Maintenance!!!');
			this.maintenance = scooter;
		} else if (scooter === 'Yes' || 'yes') {
			this.maintenance = scooter;
			console.log('Needs Maintenance!!');
		}
	}
	static checkType(scooter) {}
}

const nick = new Nick(17, '20$', 'No', 'Nick');


module.exports = ChargingStation;
