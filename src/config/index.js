const _ = require('lodash');

var config = require('./config');

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;

try {
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch(e) {
    envConfig = {};
}

module.exports = _.merge(config, envConfig);