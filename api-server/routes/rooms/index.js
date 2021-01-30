const { Router } = require('express');

const RoomsRouter = Router();

RoomsRouter
	.post('/create', require('./create'))
	.post('/allocate', require('./allocate'))
	.post('/maintain', require('./maintain'))
	.post('/makeAvailable', require('./makeAvailable'))
	.post('/checkout', require('./checkout'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = RoomsRouter;