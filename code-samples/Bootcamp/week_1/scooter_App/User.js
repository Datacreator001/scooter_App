class User {
	constructor(age, payment, scooter, username) {
		this.age = age;
		this.payment = payment;
		this.scooter = scooter;
		//this.usernames = [];
		//this.maintain = maintain
	}
	static addUsername(user) {
		this.usernames.push(user);
        
	}

	static userNameCheck(username) {}
}


module.exports = User;
