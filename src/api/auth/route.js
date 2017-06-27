const router = require('express').Router();
const controller = require('./controller');
const validator = require('./validator');

router.route('/signin')
    .post(validator.signin, controller.signin);

router.route('/signup')
    .post(validator.signup, controller.signup);

router.route('/recovery')
    .post(validator.recovery, controller.recovery);

module.exports = router;