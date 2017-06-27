const morgan = require('morgan');
const bodyParser = require('body-parser');

// setup global middleware here
module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('express-validator')());
    app.use(require('./jwt'));
};