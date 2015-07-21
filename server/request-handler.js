//var fs = require('fs');
/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var messages = [];

module.exports = function(request, response) {
  console.log('did we get this far?');

  //different types of requests:
  ////POST
  /////different options
  ////GET
  /////different options, does room exist?
  //var requestData = JSON.parse(request);

  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log("Serving request type " + request.method + " for url " + request.url);
  //console.log(request);
  // The outgoing status.
  var statusCode = 200;
  // failStatusCode = 400;


  //    response.on('data', function (chunk) {
  //     messages += chunk;
  //   });


  // if (typeof requestData !== 'object'){
  //   statusCode = 404;
  //   console.error("invalid request!!! statusCode:", statusCode);
  // }

  // if (request.method === "POST") {
  //   // var newMessage = requestData.data;

  //   messages.push(newMessage);
  //   console.log('chat posted!');
  // } else if (request.method = "GET") {

  //   console.log('GET request received');
  // }
  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = "text/plain";




  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end("Hello, World!");
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};









  // var request = http.get('http://127.0.0.1:3000/classes/messages', function(response) {
  //     console.log(response.statusCode);
  //   var messages = "";

  //   response.on('end', function() {
  //     if (response.statusCode === 200) {
  //       try {
  //         var parsedData = JSON.parse(messages);
  //         console.log('The parsed data is...', parsedData);
  //       }
  //       catch(error) {
  //         console.error(error);
  //       }
  //     }
  //   });
  // });


// fs.appendFile('./messages.txt', 'messages', function (err) {
//   if (err) {
//     console.error(err);
//   };
//   console.log('The "data to append" was appended to file!');
// });

// fs.readFile('/etc/passwd', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

