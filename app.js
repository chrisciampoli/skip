var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;
 
var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'hello jenkins'});
});

router.get('/search', function(req, res) {
	res.json({ message: 'reached search'});
});

app.use('/api', router);
 
app.listen(port);
 
module.exports = app;