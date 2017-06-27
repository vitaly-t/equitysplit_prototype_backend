const ApiError = require('../../helper/util/apiError');

exports.signin = (req, res, next) => {
    var schema = {
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        },
        'password': {
            notEmpty: true
        }
    };

    req.checkBody(schema);

    var err = req.validationErrors();
    if (err) {
        next(new ApiError.NotValid(err));
    } else {
        next();
    }
};

exports.signup = (req, res, next) => {
    var schema = {
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        },
        'password': {
            notEmpty: true
        },
        'name': {
            notEmpty: true
        },
        'last_name': {
            notEmpty: true
        }
    };

    req.checkBody(schema);

    var err = req.validationErrors();
    if (err) {
        next(new ApiError.NotValid(err));
    } else {
        next();
    }
};

exports.recovery = (req, res, next) => {
    var schema = {
      'email': {
        notEmpty: true,
        isEmail: {
          errorMessage: 'Invalid Email'
        }
      }
    };

    req.checkBody(schema);

    var err = req.validationErrors();
    if (err) {
        next(new ApiError.NotValid(err));
    } else {
        next();
    }
};