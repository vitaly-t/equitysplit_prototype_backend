const HttpCode = require('./httpCode');

class ApiError extends Error {
    constructor(content) {
        super('Internal Server Error');
        this.status = HttpCode.INTERNAL_SERVER_ERROR;
        this.content = content;
    }
};

class NotValid extends ApiError {
    constructor(content) {
        super(content);
        this.status = HttpCode.BAD_REQUEST;
        this.name = "NotValid";
    }
};

class NotFound extends ApiError {
    constructor(content) {
        super(content);
        this.status = HttpCode.NOT_FOUND;
        this.name = "NotFound";
    }
}

class Unauthorized extends ApiError {
    constructor(content) {
        super(content);
        this.status = HttpCode.UNAUTHORIZED;
        this.name = "Unauthorized";
    }
}

ApiError.NotValid = NotValid;
ApiError.NotFound = NotFound;
ApiError.Unauthorized = Unauthorized;

module.exports = ApiError;
