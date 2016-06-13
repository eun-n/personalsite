var express = require('express');
var app = express();

app.use(express.static(__dirname+'/static'));

app.get('/', function (req, res) {
	res.sendFile(__dirname+"/index.html");
});
app.get('/about', function (req, res) {
	res.sendFile(__dirname+"/about.html");
});
app.get('/portfolio', function (req, res) {
	res.sendFile(__dirname+"/portfolio.html");
});
app.get('/contact', function (req, res) {
	res.sendFile(__dirname+"/contact.html");
});
app.listen(process.env.PORT || 3000);