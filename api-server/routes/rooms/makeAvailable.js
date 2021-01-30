const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body)
	const sql = "UPDATE rooms SET status=1 WHERE room_no=" + String(req.body.room_no);
	con.query(sql, function(err, result, fields) {
		if(err) throw err;
		console.log("Room #" + String(req.body.room_no) + " is now available.");
		res.send(result);
	});
}