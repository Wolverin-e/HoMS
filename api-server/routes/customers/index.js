const { Router } = require('express');

const CustomersRouter = Router();

CustomersRouter
	.post('/create', require('./create'))
	.get('/fetchAll', require('./fetchAll'));

module.exports = CustomersRouter;