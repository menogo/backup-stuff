var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

// route
app.get('/', function (req, res) {
  res.send('Hello World\n');
});

app.get('/books', function (req, res) {
  res.send('Hello Books\n');
});

app.listen(port, function (err) {
  console.log( 'Server running on port: ' + port );
});