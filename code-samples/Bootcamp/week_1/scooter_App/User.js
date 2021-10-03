class User{
    constructor(username, age, paymentType, paymentTotal){
        this.username = username
        this.age = age 
        this.paymentType = paymentType
        this.paymentTotal = paymentTotal
    }
    static nameIsString(name) {
        return typeof name === 'string'
    }
    static isValidPaymentType(paymentType) {
        const money = ['credit', 'debit', 'zelle', 'cashApp', 'payPal']
        return (money.includes(paymentType))
    }
	paymentRecieve(payment){
if(this.paymentTotal < 20){
	console.log("insufucient funds");
} else if(this.paymentTotal = 20){
	console.log('Payment recieve');
}
	}
}


function checkAge(age, adultAge){
    if(age >= 18 || adultAge >=18) {
		console.log(` Adult age ${adultAge} is old eough, and you may rent a scooter!!`);
	} else if (age<18){
		
		console.log(` age ${age} is not old enough`);
	}
}
        
    
//console.log(User.isValidPaymentType('zelle'));
//console.log(checkAge(13,18));

//console.log(user1.checkPayment());


module.exports = User;
