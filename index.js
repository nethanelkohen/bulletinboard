var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var Messages = require("./models/models.js");

app.set('view engine', 'pug');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  Messages.findAll().then(function(results) {
    response.render('index', {
      results
    });
  });
});

app.get('/post', function(request, response) {
  response.render('post');
});

app.post('/post', function(request, response) {
  Messages.sync().then(function() {
    Messages.create({
      title: request.body.title,
      body: request.body.msg
    });
    response.redirect('/');
  });
});

app.get('*', function(request, response) {
  response.status(400).send('<h1>uh oh! page not found!</h1>');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
