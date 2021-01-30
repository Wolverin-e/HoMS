const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body)
	const sql = "UPDATE occupies SET checked_out=1 WHERE room_no=" + String(req.body.room_no);
	con.query(sql, function(err, result, fields) {
		if(err) throw err;
		console.log("Room #" + String(req.body.room_no) + " has been checked out.");
		res.send(result);
	});
}