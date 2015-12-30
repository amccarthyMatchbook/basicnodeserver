var m2 = require('./mod2'),
http = require('http');
m2();
var server = http.createServer(function(request, response){
  console.log('got a request');
  response.write('hello there');
  response.end();
});

server.listen(9000);