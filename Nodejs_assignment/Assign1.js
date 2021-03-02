var http=require('http')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Success, i'm listening from port: 3000");
}));
server.listen(3000);