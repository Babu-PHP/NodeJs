var mysql = require("mysql");

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "root"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Server is Connected!");

	con.query("CREATE DATABASE mydb2", function(err, result){
		if(err) throw err;
		console.log("Databasde is Created!");
	})
})