const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body);
	const sql = "INSERT INTO rooms (room_no,type,status) VALUES ?";
	const values = [[String(req.body.room_no), String(req.body.type), String(req.body.status)]];
	con.query(sql, [values], function(err, result, fields) {
		if(err) throw err;
		console.log("Room Created" + String(req.body.room_no));
		res.send(result);
	});
}