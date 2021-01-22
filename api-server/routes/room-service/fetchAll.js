module.exports = (req, res) => {
	const con = require('./con')();

	con.connect(function(err) {
		if(err) throw err;
		console.log("Connected!");
		const sql = "SELECT * FROM roomservice";
		con.query(sql, function(err, result, fields) {
			if(err) throw err;
			res.send(result);
		});
	});
}