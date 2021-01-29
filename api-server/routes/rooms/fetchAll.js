const con = require('../con');

module.exports = (req, res) => {
	const sql = `SELECT rooms.room_no, rooms.type, rooms.status, occupies.customer_id \
				 FROM rooms \
				 LEFT JOIN occupies ON ( \
					rooms.room_no=occupies.room_no AND \
					occupies.arrival<=CURDATE() AND \
					CURDATE()<=occupies.departure \
				 )`;
	con.query(sql, function(err, result, fields) {
		if(err) throw err;
		res.send(result);
	});
}