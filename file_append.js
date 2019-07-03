var fs =  require("fs");

fs.appendFile("mynewfile.txt","Hi Babu", function(err){
	if(err) throw err;
	console.log('Appended Hi Babu at end of the file!');
})