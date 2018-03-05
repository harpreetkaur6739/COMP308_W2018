let mongoose = require('mongoose');
Schema = mongoose.Schema;
let CustomerSchema = new Schema({
    firstName : String,
    lastName : String,
    email : {
        type : String,
        trim : true,
        unique : true
    },
    password : String,
    gender : String,
    contactNum : Number
});

CustomerSchema.statics.authenticate = function authenticate(username, password){
    return this.email === username && this.password === password;
}

mongoose.model('Customer', CustomerSchema);