

message.method https://nodejs.org/api/http.html#http_message_method

var url = require('url');

function(request, response){
  var path = url.parse(request.url).pathname;

  if ('/classes/messages' === path) {
    if (request.method === 'GET'){
      var statusCode = 200;
      headers['Content-Type'] = "application/json";
      response.writeHead(statusCode, headers);
      response.write(JSON.stringify({results: messages}));
      response.end();
    } else if (request.method === 'POST') {

      var data = ""; //Stringified data from client

      request.on('data', function(chunk){
        data += chunk;
      })

      request.on('end', function(){
        //Add data to messages array
        //Send response

        var statusCode = 201;
        headers['Content-Type'] = "application/json";
        response.writeHead(statusCode, headers);
        //response.write();
        response.end();
      })

    } else if (request.method === 'OPTIONS') {
      var statusCode = 200;
      headers['Content-Type'] = "application/json";
      response.writeHead(statusCode, headers);
      response.write(JSON.stringify({results: messages}));
      response.end();
    }
  }






}
