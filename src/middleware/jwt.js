const jwt = require('express-jwt');
const config = require('../config');

module.exports = jwt({
    secret: config.secrets.jwt,
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        
        return null;
    }
});