const { Router } = require('express');

const RoomServiceRouter = Router();

RoomServiceRouter
	.post('/deactivate', require('./deactivate'))
	.post('/create', require('./create'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomServiceRouter;