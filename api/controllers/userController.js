'use strict';

const mongoose = require('mongoose'),
    jwt = require('bcrypt'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('User');

exports.sign_up = (req, res) => {
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({ message: err });
        } else {
            user.password = undefined;
            return res.json(user);
        }
    });
};

exports.sign_in = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).json({message: 'Authentication failed. User not found.'});
        } else if (user) {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({message: 'Authentication failed. Wrong password.'});
            } else {
                return res.json({token: jwt.sign({email: user.email, firstName: user.firstName, lastName: user.lastName}, 'RESTFULAPIs')});
            }
        }
    });
};

exports.login_require = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({message: 'Unauthorized user!'});
    }
};
