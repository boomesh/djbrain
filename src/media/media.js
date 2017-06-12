'use strict';

const spotify = require('./spotify/spotify');
const log = require('../helpers/log');

const methods = {
	addSong : addSong,
	currentSong : currentSong
};

function addSong(query, onSuccess, onError) {
	// TODO query song on spotify
	spotify.search(query, (spid) => {
		// add song to sonos queue
		onSuccess();
	}, (err) => {
		onError(err);
	});
}

function currentSong() {
	// todo check SONOS to see the current playing song
	return "TODO find the current playing song";
}

module.exports = methods;


