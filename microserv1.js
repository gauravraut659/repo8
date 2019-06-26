
var http=require('http');   

var customer ={
    name:"Gaurav",
    description:"customer",
    address:"Iacsd, Aakurdi ",
    work:"Check account"
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(customer));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");
