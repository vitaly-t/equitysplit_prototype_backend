const router = require('express').Router();
const controller = require('./controller');
const auth = require('../auth');

router.route('/me')
    .get(auth.verifyUser, controller.get);

module.exports = router;