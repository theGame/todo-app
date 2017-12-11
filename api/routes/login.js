const express = require('express');
const User = require('./../models/User');
const userRole = require('./../constants/UserRoles');
const router = express.Router();

/* POST /login user */
router.post('/', (req, res, next) => {
    User.find({role: userRole.admin}).exec( (err, users) => {
        if (err) return next(err);

        let response = 0;
        for(const user of users) {
            if (user.email === req.body.email && user.password === req.body.password) {
                response++;
            }
        }

        if (response) {
            res.json({message: 'Loginned!'});
        } else {
            res.json({message: 'Not found such user!'});
        }
    });
});

module.exports = router;
