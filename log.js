'use strict';
// https://stackoverflow.com/a/12019883
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true, colorize: 'all' }),
    new winston.transports.File({ filename: __dirname + '/debug.log', json: false })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true, colorize: 'all' }),
    new winston.transports.File({ filename: __dirname + '/exceptions.log', json: false })
  ],
  exitOnError: false
});
logger.level = 'debug';

var logWrapper = {
	e : function error(string) {
		logger.error(string);
	},
	d : function debug(string) {
		logger.debug(string);
	},
	i : function info(string) {
		logger.info(string);
	}
};

module.exports = logWrapper;