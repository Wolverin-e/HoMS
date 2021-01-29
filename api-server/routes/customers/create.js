const con = require('../con');

module.exports = (req, res) => {
	console.log(req.body);
	const sql = "INSERT INTO customers (name,phone,address) VALUES ?";
	const values = [[String(req.body.name), String(req.body.phone), String(req.body.address)]];
	con.query(sql, [values], function(err, result, fields) {
		if(err) throw err;
		console.log("Customer Created" + String(req.body.name));
		res.send(result);
	});
}