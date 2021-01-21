const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "homdb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    const sql = "SELECT * from roomservice";
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});