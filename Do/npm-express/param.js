'use strict';

var express = require('express');

var app = express();

app.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});

app.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  console.log(req);
  res.end('Hello World!');
});

app.get('/user?id=:id', function (req, res) {
  console.log('and this matches too');
  console.log(req);
  res.end('Hello World!');
});

app.listen(9876);