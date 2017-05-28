'use strict';
require('dotenv').config();

/*
 * LIBRARIES  
 */
const express = require('express');
const router = express.Router();
const app = express();

/*
 * HELPERS
 */
const log = require('./helpers/log');

/*
 * SETUP ROUTER
 */
require('./routing')(router);

app.use('/', router);
app.listen(process.env.SERVER_PORT, () => {
	log.i('started');
});