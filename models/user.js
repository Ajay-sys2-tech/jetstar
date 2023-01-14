const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const jwt = require("jsonwebtoken");
require('dotenv').config();

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
   
});



const user = new mongoose.model('Jetstar', userSchema);

module.exports = user;