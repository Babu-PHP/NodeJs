var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected");

	con.query("SELECT name, address FROM customers",  function(err, result, fields){
		if(err) throw err;
		console.log(result);
		console.log(result[2].address);
		console.log(fields);
		console.log(fields[1].name);
	});
});