module.exports = () => {
	const mysql = require('mysql');
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password",
		database: "homdb",
		port: 13306
	});
}