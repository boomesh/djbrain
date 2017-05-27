'use strict';
require('dotenv').config();

const express = require('express');
const router = express.Router();
const app = express();

const log = require('./helpers/log');

app.use('/', router);
app.listen(process.env.SERVER_PORT, () => {
	log.i('started');
});