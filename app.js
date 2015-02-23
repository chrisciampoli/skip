var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});

app.get('/search', function(req, res) {
	res.send('reached search');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;