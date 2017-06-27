const config = require('../../config');
const crypto = require('crypto');

exports.encrypt = (data) => {
    let cipher = crypto.createCipheriv(config.secrets.crypt.alg, config.secrets.crypt.key, config.secrets.crypt.iv);
    let encrypted = cipher.update(plainText, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

exports.decrypt = (encryptedData) => {
    let decipher = crypto.createDecipheriv(config.secrets.crypt.alg, config.secrets.crypt.key, config.secrets.crypt.iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

exports.hash = (data) => {
    let hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

