var fs = require("fs");

fs.rename("mynewfile.txt","myrenamedfile.txt", function(err){
	if(err) throw err;
	console.log("mynewfile.txt renamed as myrenamedfile.txt!");
});