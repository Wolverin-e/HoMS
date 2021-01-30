const { Router } = require('express');

const RoomsRouter = Router();

RoomsRouter
	.post('/create', require('./create'))
	.post('/allocate', require('./allocate'))
	.post('/maintain', require('./maintain'))
	.post('/makeAvailable', require('./makeAvailable'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomsRouter;