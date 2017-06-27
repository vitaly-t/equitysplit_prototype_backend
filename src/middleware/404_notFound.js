const ApiError = require('../helper/util/apiError');

module.exports = (req, res, next) => {
    next(new ApiError.NotFound(`${req.originalUrl} route not found`));
};