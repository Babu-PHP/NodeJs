var fs = require("fs");

fs.unlink("mynewfile2.txt", function(err){
	if(err) throw err;
	console.log('File mynewfile2.tx is deleted!');
});