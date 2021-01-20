const { Router } = require('express');

const RoomServiceRouter = Router();

RoomServiceRouter
	.get('/create', require('./create'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomServiceRouter;