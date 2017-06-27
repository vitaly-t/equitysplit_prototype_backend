const User = require('./model');

exports.get = (req, res, next) => {
    res.json({
        "name": req.user.name,
        "last_name": req.user.last_name,
        "middle_name": req.user.middle_name,
        "email": req.user.email
    });
};