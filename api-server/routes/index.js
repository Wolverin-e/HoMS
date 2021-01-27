const Express = require('express');

module.exports = ( app=Express() ) => {
	app.use('/roomService', require('./room-service'));
	app.use('/rooms', require('./rooms'));
}