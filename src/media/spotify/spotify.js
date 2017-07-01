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
				var json = JSON.parse(body);
				baseRequest = baseRequest.defaults({
					headers: { 
						Authorization : json.token_type + " " + json.access_token 
					}
				});
				onSuccess();
			} else {
				// todo handle error
				onError();
			}
			log.d("AUTH HAPPENED");
			log.i(body);
		})
		.form({grant_type:'client_credentials'});
}

function search(query, onSuccess, onError) {
	// test sonos with 4ziNEnmyNT3AJL98nfXr0D spid
	var authSuccessCallback = () => {
		log.d("searching for \""+query+"\"");
		baseRequest
			.get(HOST+"search/?type=track&q="+query, function(err, res, body) {
				if (res.statusCode === 200) {
					var json = JSON.parse(body);
					onSuccess(json);
				} else if (res.statusCode === 401) {
					// todo figure out how to reauth and then make request again
					onError();
				} else {
					onError();
				}
				log.d(res.statusCode);
				log.i(res.body);
			});
	};

	auth(authSuccessCallback, () => {});
}

module.exports = methods;