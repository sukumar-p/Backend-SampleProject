let mongoose = require('mongoose');

let registerDetails = new mongoose.Schema({
    email: String,
    password: String,
    conpassword: String,
    firstname: String,
    lastname: String,
    mobile: Number


})

let registerModel = mongoose.model('users', registerDetails);
module.exports = registerModel;