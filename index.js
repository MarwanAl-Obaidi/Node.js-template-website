var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(3000);
console.log('port 3000 connected!');