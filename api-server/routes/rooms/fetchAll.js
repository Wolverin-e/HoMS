const con = require('../con');

module.exports = (req, res) => {
	const sql = "SELECT * FROM rooms";
	con.query(sql, function(err, result, fields) {
		if(err) throw err;
		res.send(result);
	});
}