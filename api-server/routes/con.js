const mysql = require('mysql');
const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "homdb",
	port: 13306
});

conn.connect(err => {
	if(err) throw err;
	console.log("Connected to DB!");
});

module.exports = conn;