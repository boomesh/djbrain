'use strict';
require('dotenv').config();

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
server.listen(process.env.SERVER_PORT, function() {
	log.i('started');
});