const User = require('./model');
const jwt = require('../../helper/util/jwt');
const HttpCode = require('../../helper/util/httpCode');

exports.signin = (req, res, next) => {
    User.findByEmail(req.body)
        .then(user => {
            if (!user) {
                next(new ApiError.NotFound('No user with the given email'));
            } else {
                if (user.password) {
                    res.json({ token: jwt.signToken(user.id) });
                } else {
                    next(new ApiError.Unauthorized('Wrong password'));
                }
            }
        }, err => {
            next(err);
        })
};

exports.signup = (req, res, next) => {
    User.add(req.body)
        .then(userId => {
            res.status(HttpCode.CREATED).json({token: jwt.signToken(userId)});
        })
        .catch(err => {
            next(err);
        })
};

exports.recovery = (req, res, next) => {
    // TODO: add agent to send email with link to sended email address at the body
    //       to reset password
    res.status(HttpCode.ACCEPTED).json({ "status": "accepted" });
};