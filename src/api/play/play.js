'use strict';

const media = require('../../media/media');
const log = require('../../helpers/log');

const playResource = {
	GET : currentPlayingSong,
	POST : playSong
};

function currentPlayingSong(req, res) {
	res.status(501).json({message : media.currentSong()});
}

function playSong(req, res) {
	const query = req.body.query
	if (query) {
		media.addSong(query, () => {
			res.status(204);
		}, (err) => {
			res.status(500).json({message : "could not play song: " + err});
		});
	} else {
		res.status(400).json({message : "body missing 'query'"});
	}
}

module.exports = playResource;