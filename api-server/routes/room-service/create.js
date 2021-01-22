module.exports = (req, res) => {
	const mysql = require('mysql')

	const con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password",
		database: "homdb"
	});

	con.connect(function(err) {
		if(err) throw err;
		console.log("Connected!");
		console.log(req.body);
		const sql = "INSERT INTO roomservice (type,room_no,additional_notes) VALUES ?";
		const values = [[String(req.body.type), String(req.body.room_no), String(req.body.additional_notes)]];
		con.query(sql, [values], function(err, result, fields) {
			if(err) throw err;
			console.log("Room Service Created For Room #" + String(req.body.room_no));
			res.send(result);
		});
	});
}