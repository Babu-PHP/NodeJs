var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log('Connected!');

	var sql = "INSERT INTO customers(name, address) VALUES('babu1', 'vsp')";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("Data inserted : "+result.insertId)

	})
})