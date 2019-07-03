var mysql = require("mysql");

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root",
	database : "mydb2"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	// var sql = "CREATE TABLE customers(name VARCHAR(255), address VARCHAR(255))";
	// con.query(sql, function(err, result){
	// 	if(err) throw err;
	// 	console.log("table created!!");	 
	// });

	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("table altered!!");	 
	});
})