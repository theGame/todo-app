const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userRole = require('../constants/UserRoles');

// Schema to enforce consistent structure.
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        default: userRole.visitor,
        require: true
    }
});
const User = mongoose.model('User', UserSchema);


// todo: method .pre is a middleware and we should create separate folder with file middlewares
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

UserSchema.authenticate = (email, password, callback) => {
    User.findOne({ email: email })
        .exec( (err, user) => {
            if (err) {
                return callback(err);
            } else if (!user) {
                const noUserError = new Error('User not found.');
                noUserError.status = 401;
                return callback(noUserError);
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

UserSchema.comparePassword = (pass) => bcrypt.compareSync(pass, this.password);
module.exports = User;


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
