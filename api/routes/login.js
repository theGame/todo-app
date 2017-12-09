const express = require('express');
const User = require('./../models/User');
const userRole = require('./../constants/UserRoles');
const router = express.Router();

/* POST /login user */
router.post('/', (req, res, next) => {
    User.find({role: userRole.admin}).exec( (err, users) => {
        if (err) return next(err);

        Object.keys(users).forEach((key) => {
            if (users[key].email === req.body.email && users[key].password === req.body.password) {
                res.json({message: 'loginned!'});
            }
        });
    });
});

module.exports = router;
