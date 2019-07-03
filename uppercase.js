var uc = require("upper-case");
var http = require("http");

http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type':'text/html'});
	res.end(uc('Hello World'));
}).listen(3100);