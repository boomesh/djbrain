'use strict';
const http = require('http');
const log = require('./log');

// based off of https://github.com/htilly/zenmusic
const requestHandler = function (req, res) {
	req
	.on('data', function(chunk) {})
	.on('end', function() {
		res.end("request received\n");
	});
};

const server = http.createServer(requestHandler);
server.listen('5555', function() {
	log.i('started');
});