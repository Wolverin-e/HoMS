module.exports = (req, res) => {
	const con = require('./con')();

	con.connect(function(err) {
		if(err) throw err;
        console.log("Connected!");
        console.log(req.body)
		const sql = "UPDATE roomservice SET status=0 WHERE id=" + String(req.body.id);
		con.query(sql, function(err, result, fields) {
            if(err) throw err;
            console.log("Room Service #" + String(req.body.id) + " is now deactivated");
			res.send(result);
		});
	});
}