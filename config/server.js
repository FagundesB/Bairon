var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

var todoList = [];

app.get('/', function(req, res) {
  res.render('index.ejs', {todoList: todoList});
});

app.post('/newtodo', function(req, res) {
  var item = req.body.item;
  todoList.push(item);
  res.redirect('/');
});

module.exports = app;
