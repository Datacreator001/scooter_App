const City = require('./City');
const ChargingStation = require('./ChargingStation');
const Scooter = require('./Scooter');
const User = require('./User');
const { ageCheck, chargeScooter } = require('./ChargingStation');

let cityAtl = new City('Atl');
let chargingstation1 = new ChargingStation('Ride With Pride', 20);
let scooter1 = new Scooter(1, 20, 'Atl', 'no');
let bob = new User('BobRides123', 20, 'zelle', 20);

cityAtl.addChargingStation('Atl', chargingstation1);
chargingstation1.addScooter('Scooters Available', scooter1);
//scooter1.addUser('Users renting this scooter',bob);

const downloadApp = (user) => {
	if (user === 'scooterApp') {
		user = bob;
		if (user.age >= 18) {
			scooter1.addUser('Users renting this scooter', bob);
			chargingstation1.removeScooter('Scooters Available', scooter1);
			console.log(scooter1);
		} else {
			console.log('Sorry your not old enough to rent a scooter');
		}
		console.log(
			'==============================================================='
		);
		if (scooter1.batteryStatus < 20) {
			console.log('Sorry this scooter needs to be charged');
		} else {
			console.log(`Scooter's battery Status is ${scooter1.batteryStatus}% and is fully charged`);
		}
	}
	function batteryDeplete(scooter) {
		while (scooter.batteryStatus > 0) {
			scooter.batteryStatus--;

			console.log(` Scooter's Battery Status is ${scooter.batteryStatus}%`);
			if (scooter.batteryStatus === 0) {
				console.log('Battery is Dead');
				console.log(scooter);
			}
		}
	}
	batteryDeplete(scooter1);
	
};

console.log(downloadApp('scooterApp'));
//console.log(cityAtl.stations['Atl'][0]);

/*To hire a scooter, a user must download the Electric Bike Hire app and register their details
Only users 18 years and above can ride a scooter
Scooters are rented from charging stations
There are multiple charging stations in the city
Only fully charged scooters can be rented
A scooter must be returned to a charging station
It takes 2 hours to fully charge a scooter from empty
Payment is taken once the user has returned their scooter
A scooter can be marked by a user as broken. This must remove the scooter from a list of available scooters and trigger maintenance personnel to repair the scooter
The maximum range of a fully charged scooter is 20 miles.*/
