'use strict';

var playResource = {
	GET : currentPlayingSong,
	POST : playSong
};


function currentPlayingSong(req, res) {
	res.status(501).json({message : 'nothing is playing'});
}

function playSong(req, res) {
	res.status(501).json({message : 'cannot play song'});	
}

module.exports = playResource;