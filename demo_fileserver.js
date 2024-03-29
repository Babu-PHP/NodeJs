var http = require("http");
var url = require("url");
var fs =  require("fs");

http.createServer(function(req, res){
	var q = url.parse(req.url, true);
	var filename = "."+q.pathname;
	fs.readFile(filename, function(err, data){
		if(err){
			res.writeHeader(404, {'Content-Type':'text/html'});
			return res.end('404 Not Found');
		}
		res.writeHeader(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});
}).listen(3100);