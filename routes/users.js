const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register router
router.post('/register', (req,res, next ) => {
    var newuser = new User({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    });
    User.addUser(newuser, (err, data ) => {
        if(err) {
            res.json({ success : failure, msg: 'Failed to register user'});
        }else {
            res.json({ success : true, msg : 'User Registered Successfully'})
        }
    });
    // res.send("hii")
});

// Authentication router
router.post('/authenticate', (req,res, next ) => {
    res.send('Authentication ')
});

// profile
router.get('/profile', (req,res) => {
    res.send('Profile')
});

module.exports = router;