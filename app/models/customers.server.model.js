let mongoose = require('mongoose');
Schema = mongoose.Schema;
let CustomerSchema = new Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        trim : true,
        unique : true,
		required : 'Email is required',
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password : {
        type: String,
        required: 'Password is required'
	},
    gender : String,
    contactNum : Number,
    feedBack : String
});

CustomerSchema.methods.authenticate = function authenticate(password){
    //console.log('user:' + Customer.email + ', password: ' + Customer.password);
   // console.log(email + '-' + password);
   // console.log('authentication result:' + this.email === customer.email && this.password === customer.password);
    return this.password === password;
}

mongoose.model('Customer', CustomerSchema);