const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.signToken = (id) => {
    return jwt.sign(
        { id: id },
        config.secrets.jwt,
        {expiresIn: config.expireTime}
    );
};