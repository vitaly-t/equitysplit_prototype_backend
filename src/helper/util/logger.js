// no var needed here, colors will attached colors
// to String.prototype
require('colors');
var _ = require('lodash');

var config = require('../../config');

// create a noop (no operation) function for when loggin is disabled
var noop = function() {};
// check if loggin is enabled in the config
// if it is, then use console.log
// if not then noop
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
    log : function() {
        // arguments is an array like object with all the passed
        // in arguments to this function
        var args = _.toArray(arguments)
            .map(function(arg) {
                if (typeof arg === 'object') {
                    var string = JSON.stringify(arg, 2);
                    return string.cyan;
                } else {
                    arg += '';
                    return arg.cyan;
                }
            });

        consoleLog.apply(console, args);
    },
    error : function() {
        // arguments is an array like object with all the passed
        // in arguments to this function
        var args = _.toArray(arguments)
            .map(function(arg) {
                if (typeof arg === 'object') {
                    var string = JSON.stringify(arg, 2);
                    return string.red;
                } else {
                    arg += '';
                    return arg.red;
                }
            });

        consoleLog.apply(console, args);
    },
};

module.exports = logger;