'use strict';

const request = require('request');
const PROTOCOL = "https://";
const HOST = PROTOCOL + "api.spotify.com/v1/"

const log = require('../../helpers/log');

const methods = {
	search : search
};

var baseRequest = request.defaults();

function auth(onSuccess, onError) {
	const options = {
		url : "https://accounts.spotify.com/api/token",
		headers : {
			"Authorization" : "Basic " + new Buffer(process.env.SPOTIFY_CLIENT_ID + ":" +  process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
		}
	};
	baseRequest
		.post(options, function(err, res, body) {
			if (res.statusCode === 200) {
				baseRequest.defaults({
					headers: { 
						Authorization : body.token_type + " " + body.access_token 
					}
				});
				onSuccess();
			} else {
				// todo handle error
				onError();
			}
			log.i(body);
		})
		.form({grant_type:'client_credentials'});
}

function search(query, onSuccess, onError) {
	auth(() => {}, () => {});
	onSuccess();
}

module.exports = methods;