const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body);
	const sql = "INSERT INTO occupies (room_no, customer_id, arrival, departure) VALUES ?";
	const {room_no, customer_id, arrival, departure} = req.body;
	const values = [[room_no, customer_id, arrival, departure].map(String)];
	con.query(sql, [values], function(err, result, fields) {
		if(err) throw err;
		console.log("Room Allocated " + String(req.body.room_no));
		res.send(result);
	});
}