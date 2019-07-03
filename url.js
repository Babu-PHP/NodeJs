var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2019&month=July";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qtxt = q.query;
console.log(qtxt.month);