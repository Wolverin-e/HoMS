const { Router } = require('express');

const RoomsRouter = Router();

RoomsRouter
	.post('/create', require('./create'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomsRouter;