let mongoose = require('mongoose');
Schema = mongoose.Schema;
let CustomerSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    gender : String,
    contactNum : Number
});

mongoose.model('Customer', CustomerSchema);