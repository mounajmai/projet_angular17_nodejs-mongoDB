// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =new Schema({
    name: String,
    email: String,
    age: Number,
    adresse: String,
    password: String,
});

const User = mongoose.model('users',userSchema);
module.exports=User;