var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.logger());

var data = fs.readFileSync("index.html");
app.get('/', function(request, response) {
    response.send(data);
});


app.get('/', function(request, response) {
  response.send('Reading the index.html file');
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
