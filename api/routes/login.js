const express = require('express');
const User = require('./../models/User');
const userRole = require('./../constants/UserRoles');
const router = express.Router();

/* POST /login user */
router.post('/', (req, res, next) => {
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

module.exports = router;
