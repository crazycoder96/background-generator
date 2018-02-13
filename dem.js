var http = require('http');

http.createServer(function(req,res){

	res.writeHead(201 , {'Content-Type': 'text/plain'});
	res.end('Hello World');
}).listen(3000);
alert("server is running on http://127.0.0.1:3000/");

var time =0;
var timer = setInterval(function() {
		time=time+2;
		alert(time+'sec have passed');
		if(time>7)
		{
			clearInterval(timer);
		}

},2000);