const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "homdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = ""; //Add sql update query
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Altered");
    });
});