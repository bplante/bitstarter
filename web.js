var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Reading the index.html file');
});

var data = fs.readFileSync("index.html", "utf8");
console.log(data);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
