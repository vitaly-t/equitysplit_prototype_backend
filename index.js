var config = require('./src/config');
var app = require('./src/server');
var logger = require('./src/helper/util/logger');

app.listen(config.port);
logger.log('listenning on port ' + config.port);