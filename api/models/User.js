const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userRole = require('../constants/UserRoles');

// Schema to enforce consistent structure.
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    role: {
        type: Number,
        default: userRole.visitor
    }
});

UserSchema.pre('save', (next) => {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({ email: email })
        .exec( (err, user) => {
            if (err) {
                return callback(err);
            } else if (!user) {
                let err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            });
        });
};

module.exports = mongoose.model('User', UserSchema);


/* // added admin user to bd
const adminUser = new User({
    firstName: 'Yuriy',
    lastName: 'Voytas',
    email: '',
    password: '111', //FYI password should be hashed and than saved in DB
    role: userRole.admin
});
console.log(User);
adminUser.save((err) => {if (err) console.log('Error on save!')});*/
