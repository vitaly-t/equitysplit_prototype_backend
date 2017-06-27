const express = require('express');
const app = express();

// setup the app middleware
require('./middleware/app')(app);

// setup the api
app.use('/', require('./api'));
app.use(require('./middleware/404_notFound'));

// setup  global error handling
app.use(require('./middleware/err.js'));

// export the app for testing
module.exports = app;