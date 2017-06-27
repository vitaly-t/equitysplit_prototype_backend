const logger = require('../helper/util/logger');
const ApiError = require('../helper/util/apiError')

module.exports = function(err, req, res, next) {

    logger.error(err);
    if (err instanceof ApiError) {
        res.status(err.status).json({
            "error": {
                "name": err.name,
                "content": err.content
            }
        });
    } else {
        err = new ApiError('Internal Server Error');
        res.status(err.status).json({
            "error": {
                "name": err.name,
                "content": err.content
            }
        });
    }
};