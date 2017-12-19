const express = require('express');
const User = require('./../models/User');
const userRole = require('./../constants/UserRoles');
const router = express.Router();

router.post('/signin', (req, res, next) => {
    const { email, password } = req.body;
    User.find({ email, password, role: userRole.admin}).exec( (err, user) => {
        /*
        * if we found the user then we should save it in the session like so:
        *
        *   req.session.user = user;
        *
        * then on each request we should check if session has user already if no throw 401 unauthorized like so:
        *
        *   if (!req.session.user) return res.status(401).send()
        * */

        if (err) return next(err);

        if (!user.length) return res.status(404).send('Not found such user!');

        req.session.user = user;
        return res.status(200).json({message: 'Loginned'});
    });
});


router.post('/signup', (req, res) => {
    const body = req.body;
    if (body.email && body.firstName && body.lastName && body.password) {

        const userData = {
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password, // should be already cashed
            email: body.email,
            role: body.role || userRole.visitor
        };

        // use schema.create to insert data into the db
        User.create(userData, (err, user) => {
            if (err) {
                return res.status(400).json({message: err});
            }

            return res.status(400).json({
                message: 'User was created',
                user
            });
        });
    } else {
        return res.status(400).json({message: 'You should provide all params'});
    }
});

module.exports = router;
