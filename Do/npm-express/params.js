'use strict';

var express = require('express');

var app = express();

app.param(function (name, fn) {
  if (fn instanceof RegExp) {
    return function (req, res, next, val) {
      var captures;
      if (captures = fn.exec(String(val))) {
        req.params[name] = captures;
        next();
      } else {
        next('route');
      }
    }
  }
});

app.param('id', /^\d+$/);

app.use('/user/:id', function (req, res) {
  debugger;
  res.send('user ' + req.params.id);
});

app.param('range', /^(\w+)\.\.(\w+)?$/);

app.use('/range/:range', function (req, res) {
  var range = req.params.range;
  debugger;
  res.send('from ' + range[1] + ' to ' + range[2]);
});

app.listen(9876);