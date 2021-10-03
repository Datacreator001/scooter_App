const City = require('./City');
const ChargingStation = require('./ChargingStation');
const Scooter = require('./Scooter');
const User = require('./User');
const { ageCheck, chargeScooter } = require('./ChargingStation');
const { warn } = require('console');

let cityAtl = new City('Atl');
let chargingstation1 = new ChargingStation('Ride With Pride', 20);
let scooter1 = new Scooter(1, 100, 'Atl', 'no');
let bob = new User('BobRides123', 18, 'zelle', 20);

cityAtl.addChargingStation('Atl', chargingstation1);
chargingstation1.addScooter('Scooters Available', scooter1);
//scooter1.addUser('Users renting this scooter',bob);

const downloadApp = (user) => {
	if (user === 'scooterApp') {
		user = bob;
		if (user.age >= 18) {
			scooter1.addUser('Users renting this scooter', bob);
			chargingstation1.removeScooter('Scooters Available', scooter1);
			// console.log(scooter1);
			console.log(`This scooter's battery Status is ${scooter1.batteryStatus}%, and is fully charged`)
			console.log(`Enjoy the ride ${bob.username}`);;
			const batteryDeplete = function () {
				var range = 0;
				while (range < 22) {
					(function (i) {
						setTimeout(function () {
							scooter1.batteryStatus= scooter1.batteryStatus -Math.trunc((scooter1.batteryStatus*(.02)^4));
							console.log(`Battery Status is ${scooter1.batteryStatus}%`);
							// console.log(scooter1);
						}, 600 * i);
					})(range++);
				}
			};
			const batteryRecharge = function () {
				var i = 0;
				while (i < 20) {
					(function (i) {
						setTimeout(function () {
							scooter1.batteryStatus++;
							console.log(`Battery Status is ${scooter1.batteryStatus}%`);
							//console.log(scooter1);
						}, 600 * i);
					})(i++);
				}
			};
			if (scooter1.batteryStatus > 0) {
				batteryDeplete();
			}
		} else {
			console.log('Sorry your not old enough to rent a scooter');
		}
		console.log(
			'============================================================================================================='
		);
	}
};

console.log(downloadApp('scooterApp'));

//console.log(scooter1);

// console.log(
// 	cityAtl.stations['Atl'][0].scooters['Scooters Available'][0].users[
// 		'Users renting this scooter'
// 	][0]
// );

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

// var myFunc01 = function () {
// 	var i = 0;
// 	while (i < 100) {
// 		(function (i) {
// 			setTimeout(function () {
// 				document.getElementById('d01').innerHTML += 100 - i + '<br>';
// 			}, 1000 * i);
// 		})(i++);
// 	}
// };

// myFunc01();
