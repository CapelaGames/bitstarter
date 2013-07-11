var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response)
{
  var file = require('fs');
  
  var buffer = new buffer(20);
  
  response.send(buffer.toString('utf-8', file.readFileSync("index.html")));
});



var port = process.env.PORT || 5000;

app.listen(port, function()
{
  console.log("Listening on " + port);
});
