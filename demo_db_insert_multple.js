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

	var sql = "INSERT INTO customers(name, address) VALUES ?";
	var values = [
		['babu2', 'visakha'],
		['babu3', 'visakha'],
		['babu4', 'visakha'],
		['babu5', 'visakha'],
		['babu6', 'visakha']
	];
	con.query(sql, [values], function(err, result){
		if(err) throw err;
		console.log("Number of records inserted: "+result.affectedRows);

	})
})