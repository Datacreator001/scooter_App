const ChargingStation = require('./ChargingStation');


let station3 =new ChargingStation('BlazingWheelz', 20)
class City {
	constructor(name) {
		this.name = name
		this.stations = { 'Atl': [], 'Dallas': [] };
	}
	addChargingStation(city,station) {
		this.stations[city].push(station)
        console.log(this.stations);
	}
}


const newCity = new City('Atl');
newCity.addChargingStation('Atl',station3.name)
console.log(newCity);
module.exports = City;
