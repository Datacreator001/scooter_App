const ChargingStation = require('./ChargingStation');

class City {
	constructor(name) {
		this.name = name;
		this.cities = [];
	}
	addChargingStation(city) {
		return this.cities.push(city);
		console.log('check');
	}
}

const station1 = new ChargingStation('', '', '', 'Atl');
const newCity = new City('Atl');



module.exports = City;
