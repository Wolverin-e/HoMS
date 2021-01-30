const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body)
	const sql = "UPDATE rooms SET status=0 WHERE room_no=" + String(req.body.room_no);
	con.query(sql, function(err, result, fields) {
		if(err) throw err;
		console.log("Rooms #" + String(req.body.room_no) + " is now under maintainance.");
		res.send(result);
	});
}