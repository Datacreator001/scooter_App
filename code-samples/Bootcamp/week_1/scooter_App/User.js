class User{
    constructor(name, age, paymentType, paymentTotal){
        this.name = name
        this.age = age 
        this.paymentType = paymentType
        this.paymentTotal = paymentTotal
    }
    static nameIsString(name) {
        return typeof name === 'string'
    }
static ageCheck(age)  {
    if (age < 18) {
        console.log(`${age} not old enough`);
    } else { 
        console.log(`Age ${age} old enough and scooter available to rent`)
    }
}
    static isValidPaymentType(paymentType) {
        const money = ['credit', 'debit', 'zelle', 'cashApp', 'payPal']
        return (money.includes(paymentType))
    }
	checkPayment(payment){
if(this.paymentTotal < 20){
	console.log("insufucient funds");
} else if(this.paymentTotal = 20){
	console.log('Payment recieve');
}
	}
}
class Baby extends User {
    constructor(name, age, paymentType, paymentTotal, WA){ //WA = With adult 
    super(name, age, paymentType, paymentTotal)
    this.WA = WA}
}
function checkAge(age){
    if(age >= 18) {
		console.log('Age is old eough');
	} else if (age<18){
		let adult = 18
		 age= adult
		console.log(`adult age ${age} is old enough`);
	}
}
        
    
//console.log(User.isValidPaymentType('zelle'));
console.log(checkAge(13));

//console.log(user1.checkPayment());


module.exports = User;
