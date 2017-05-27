'use strict';
require('dotenv').config();

const express = require('express');
const app = express();

const log = require('./log');

app.listen(process.env.SERVER_PORT, () => {
	log.i('started');
});

// controller

app.get('/', (req, res) => {
	res.send('express configured\n');
});
