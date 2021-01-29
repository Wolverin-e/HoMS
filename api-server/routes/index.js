const Express = require('express');

module.exports = ( app=Express() ) => {
	app
		.use('/roomService', require('./room-service'))
		.use('/rooms', require('./rooms'))
		.use('/customers', require('./customers'))
}