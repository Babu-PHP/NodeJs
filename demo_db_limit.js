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

	var sql = "SELECT name, address FROM customers LIMIT 5";

	/*
	If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:
	var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
	con.query(sql, function (err, result)

	Note: "OFFSET 2", means starting from the third position, not the second!

	You can also use write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:

	var sql = "SELECT * FROM customers LIMIT 2, 5";
  	con.query(sql, function (err, result)

  	Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
	*/
	con.query(sql,  function(err, result, fields){
		if(err) throw err;
		console.log(result);
		console.log(result[2].address);
		console.log(fields);
		console.log(fields[1].name);
	});
});