const { Router } = require('express');

const RoomsRouter = Router();

RoomsRouter
	.post('/create', require('./create'))
	.post('/allocate', require('./allocate'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomsRouter;