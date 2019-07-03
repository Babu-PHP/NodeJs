var fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hey Babu", function(err){
	if(err) throw err;
	console.log('Updated Hey Babu previously it is Hello');
})