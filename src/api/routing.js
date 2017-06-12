'use strict';

const db = {};

function setupRouting(router) {
	setupPlayRoute(router);
}

function setupPlayRoute(router) {
	const playResource = require('./play/play');

	router.route('/play')
	.get(playResource.GET)
	.post(playResource.POST);
}

module.exports = setupRouting;