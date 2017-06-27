const ApiError = require('../../helper/util/apiError');
const User = require('./model');

exports.verifyUser = (req, res, next) => {
    if ( ! req.user || ! req.user.id )
        next(new ApiError.Unauthorized('Token is invalid'));

    User.findById({ id: req.user.id })
        .then(user => {
            if (user) {
                req.user = user;
                next();
            } else {
                next(new ApiError.NotFound('User with that id'));
            }
        })
        .catch(err => {
            next(err);
        });
};