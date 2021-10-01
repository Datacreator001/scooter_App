const User = require('./User');
const Scooter = require('./Scooter');

const user2 = new User('Skyler',18,'zelle',20)

//const nick = new Nick(20, '20$', 'No', 'Nick');

class ChargingStation {
	constructor(name, payment) {
		
		this.payment = payment;
		this.name = name
		this.stations = {'Scooters':[],}
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
			console.log('This scooter does not need Maintenance!!!');
		} else if (scooter === 'Yes' || 'yes') {
			console.log('This scooter Needs Maintenance!!');
		}
	}
	static chargeScooter(batteryStatus) {
		while (batteryStatus < 20) {
			batteryStatus++;
			console.log(batteryStatus);
		}
		console.log('Scooter is now fully Charged!!');
		if(batteryStatus == 20){
			console.log("this Scooter is ready for use");
			
		}
	}
	static markedAsReturned(returned) {
		 if(returned==='Yes'||'yes'){
			 console.log('Scooter has been returned');
		 } else if(returned==="No"||"no"){
			 console.log(`Scooter has not been returned`);
		 }
	}
	addScooter(station,scooter){
		this.stations[station].push(scooter)
		console.log(this.stations);
	}
}




//console.log(ChargingStation.markedAsBroken(scooter1.maintenance));
console.log(User.isValidPaymentType(user2));
//console.log(ChargingStation.chargeScooter(scooter1.batteryStatus));
//console.log(ChargingStation.markedAsReturned(scooter1.returned));
//console.log(scootersAvailable(scooter1));
let scooter1 = new Scooter(1, 10, 'Atl','no');
const station1  = new ChargingStation('clazo');
//console.log(user2);
//console.log(station1.addScooter('Scooters',scooter1));


module.exports = ChargingStation;
