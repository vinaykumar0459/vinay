const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name : {
        type: String
    },
    email : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type :String,
        required : true
    }
});

const User = module.exports = mongoose.model("vinay", UserSchema );

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback)
}

module.exports.getUserByUsername = function(username, callback) {
    var query = { username : username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newuser, callback) {
    bcrypt.genSalt(10, (err, salt ) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
            if(err) {
                console.log(err);
            }
            newuser.password = hash;
            newuser.save(callback);
            console.log(callback);
        })
    })
}