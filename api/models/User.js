const mongoose = require('mongoose');
const userRole = require('../constants/UserRoles');

// Schema to enforce consistent structure.
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: { type: String, default: '' },
    password: { type: String, default: '' },
    email: { type: String, default: '' },
    role: { type: Number, default: userRole.visitor }
});

module.exports = mongoose.model('User', UserSchema);


/* // added admin user to bd
const adminUser = new User({
    firstName: 'Yuriy',
    lastName: 'Voytas',
    email: '',
    password: '111',
    role: userRole.admin
});
console.log(User);
adminUser.save((err) => {if (err) console.log('Error on save!')});*/
